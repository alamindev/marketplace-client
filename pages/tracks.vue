<template>
<div class="w-full py-10 px-5 md:px-0 container mx-auto">
    <h3 class="color-primary text-3xl pb-12 text-center md:text-left font-medium">Latest Tracks</h3>
    <div v-if="datas.length > 0">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 " v-if="isSearch">
            <div class="py-4 mx-5 hover__area" v-for="alltrack in datas" :key="alltrack.id">
                <div class="relative">
                    <img v-if="alltrack.image != null" :src="imgurl + 'storage/'+ alltrack.image" width="100" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" height="100" alt="">
                    <div class="overlay absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 rounded-lg transition-all duration-200 ease-in-out">
                        <div class="flex justify-center items-center h-full">

                            <button v-if="getDatas.includes(alltrack.id)" class="px-4 shadow-lg bg-white py-2 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-200 ease-in-out">Added to Cart</button>
                            <button @click="addToCart(alltrack)" v-else class="px-4 shadow-lg bg-white py-2 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-200 ease-in-out">Add to Cart</button>

                            <button v-if="isPlaying && (data.id === alltrack.id )" @click="pause" class="shadow-lg bg-white rounded-full flex items-center justify-center ml-3 w-12 h-12 hover:bg-blue-800  text-gray-700 hover:text-white transition-all duration-200 ease-in-out">
                                <font-awesome-icon class="text-2xl " :icon="['fas', 'pause']" />
                            </button>
                            <button v-else @click="playing(alltrack)" class="shadow-lg bg-white rounded-full flex items-center justify-center ml-3 w-12 h-12 hover:bg-blue-800  text-gray-700 hover:text-white transition-all duration-200 ease-in-out">
                                <font-awesome-icon class="text-2xl " :icon="['fas', 'play']" />
                            </button>
                        </div>
                    </div>
                </div>

                <h2 class="text-lg font-bold color-primary">{{ alltrack.title }}</h2>
                <p class="text-base color-muted">By {{ alltrack.user.name }}</p>
            </div>

        </div>
        <div v-else class="loader-parent">
            <div class="loader"></div>
        </div>

        <AddToCart />
        <div class="flex justify-center">
            <Paginator @NextData="NextData" :datas.sync="allTracks" />
        </div>
    </div>
    <div class="w-full" v-else>
        <h2 class="text-center text-lg">Data not found!</h2>
    </div>
</div>
</template>

<script>
import AddToCart from '@/components/addToCart'
import Paginator from '@/components/paginator';
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    components: {
        AddToCart,
        Paginator
    },
    data() {
        return {
            imgurl: process.env.imgUrl,
            isPlaying: false,
            data: {},
            datas: []
        }
    },
    methods: {
        ...mapActions({
            fetchAllTracks: 'tracks/fetchAllTracks',
            fetchAllTracksPage: 'tracks/fetchAllTracksPage',
            setDataAudio: 'audio/setaudioData',
            setPause: 'audio/setPause',
            setCartData: 'cart/setCartData',
        }),
        playing(data) {
            this.setDataAudio(data);
        },
        pause() {
            this.setPause();
        },
        addToCart(data) {
            this.setCartData(data)
        },
        async NextData(pageNum) {
            this.$router.push('?page=' + pageNum)
            this.fetchAllTracksPage(pageNum)
        },
        async loaded() {
            await this.fetchAllTracks();
        },
        async loadedwithparam(param) {
            await this.fetchAllTracksPage(param);
        }
    },
    watch: {
        'getdata'() {
            this.data = this.getdata
            if (this.getdata) {
                this.isPlaying = true
            }
        },
        'getPause'() {
            if (this.getPause) {
                this.isPlaying = false;
            }
        },
        'getPlay'() {
            if (this.getPlay) {
                this.isPlaying = true
            }
        },
        'allTracks'() {
            if (this.allTracks) {
                this.datas = this.allTracks.data
            }
        },
    },
    computed: {
        ...mapGetters({
            allTracks: 'tracks/allTracks',
            getdata: 'audio/getData',
            getPause: 'audio/getPause',
            getPlay: 'audio/getPlay',
            getDatas: 'cart/getDatas',
            isSearch: 'tracks/isSearch',
        }),

    },
    created() {
        let param = this.$router.history.current.query.page;
        if (typeof (param) !== 'undefined') {
            this.loadedwithparam(param)
        } else {
            this.loaded();
        }
    }
}
</script>
