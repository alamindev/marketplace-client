<template>
<div>
    <div class="py-24 bg-center bg-no-repeat bg-cover" style="background-image: linear-gradient(249deg, #4285C2 0%, #0E3D67 100%),url('/images/banner.png'); background-blend-mode: screen">
        <div class="container mx-auto">
            <div class="w-full md:w-9/12 lg:w-8/12 px-5 md:px-0 flex justify-center flex-col items-center md:items-start">
                <h1 class="text-3xl md:text-5xl   font-bold text-white uppercase text-center md:text-left banner__title lg:pr-5">A Place To Buy Beats From The world's Best producers</h1>
                <h2 class="text-2xl  text-white pt-3 pb-6 text-center md:text-left">Find the perfect Beat for you project </h2>
                <div class="relative  w-2/3 lg:w-1/2 pb-10 lg:pb-20">
                    <input type="text" v-on:keyup.enter="searchQuery" v-model="term" placeholder="Search" name="search" class="w-full py-3 pl-5 pr-10 border-none rounded-full">
                    <font-awesome-icon class="cursor-pointer text-xl text-gray-500 absolute right-0 mr-5 mt-4" @click="searchQuery" :icon="['fas', 'search']" />
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto grid md:grid-cols-3 gap-5 md:gap-10 py-10 px-5 md:px-0">
        <div class="py-6 px-3 lg:px-12 bg-blue-100 rounded-md shadow flex justify-center flex-col items-center">
            <div class="w-20 h-20 rounded-full bg-indigo-900 flex justify-center items-center">
                <font-awesome-icon class="text-3xl text-white" :icon="['fas', 'bahai']" />
            </div>
            <div class="py-3">
                <h2 class="text-xl color-primary font-bold pb-3 text-center">Buy Tracks</h2>
                <p class="text-base color-primary text-center">Buy tracks you think you like. Doing this will abtain you a license</p>
            </div>
        </div>
        <div class="py-6 px-3 lg:px-12 bg-blue-100 rounded-md shadow flex justify-center flex-col items-center">
            <div class="w-20 h-20 rounded-full bg-indigo-900 flex justify-center items-center">
                <font-awesome-icon class="text-3xl text-white" :icon="['fas', 'bomb']" />
            </div>
            <div class="py-3">
                <h2 class="text-xl color-primary font-bold pb-3 text-center">Sell Tracks</h2>
                <p class="text-base color-primary text-center"> Create and sell your. own tracks. We make it all easy for you. Try us.</p>
            </div>
        </div>
        <div class="py-6 px-3 lg:px-12 bg-blue-100 rounded-md shadow flex justify-center flex-col items-center">
            <div class="w-20 h-20 rounded-full bg-indigo-900 flex justify-center items-center">
                <font-awesome-icon class="text-3xl text-white" :icon="['fas', 'bowling-ball']" />
            </div>
            <div class="py-3">
                <h2 class="text-xl color-primary font-bold pb-3 text-center">Customise Work</h2>
                <p class="text-base color-primary text-center">Creating a tracks isn’t enough. We let you customise the album art and whatnot!</p>
            </div>
        </div>
    </div>
    <div class="py-5 px-5 md:px-0">
        <div class="container mx-auto flex justify-between">
            <h2 class="text-base md:text-2xl font-bold uppercase color-primary">Latest Tracks</h2>
            <div class="pl-1 flex items-center">
                <button type="button" @click="showPrev1" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-left']" />
                </button>
                <button type="button" @click="showNext1" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-right']" />
                </button>
                <nuxt-link to="tracks" class="button__gradient text-white py-1 ml-1 md:ml-3 px-3 md:px-5 rounded-full">View All</nuxt-link>
            </div>
        </div>
        <div class="container mx-auto py-8">
            <div class="-mx-5">
                <VueSlickCarousel v-bind="slickOptions" ref="carousel" v-if="get_latest_tracks.length > 0">
                    <div class="slide" v-for="latest_track in get_latest_tracks" :key="latest_track.id">
                        <div class="py-2 mx-5 custom__carousel hover__area">
                            <div class="relative">
                                <img v-if="latest_track.image != null" :src="imgurl + 'storage/'+ latest_track.image" width="100" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" height="100" alt="">
                                <div class="overlay absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 rounded-lg transition-all duration-200 ease-in-out">
                                    <div class="flex justify-center items-center h-full">

                                        <button v-if="getDatas.includes(latest_track.id)" class="px-4 shadow-lg bg-white py-2 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-200 ease-in-out">Added to Cart</button>
                                        <button @click="addToCart(latest_track)" v-else class="px-4 shadow-lg bg-white py-2 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-200 ease-in-out">Add to Cart</button>

                                        <button v-if="isPlaying && (data.id === latest_track.id )" @click="pause" class="shadow-lg bg-white rounded-full flex items-center justify-center ml-3 w-12 h-12 hover:bg-blue-800  text-gray-700 hover:text-white transition-all duration-200 ease-in-out">
                                            <font-awesome-icon class="text-2xl " :icon="['fas', 'pause']" />
                                        </button>
                                        <button v-else @click="playing(latest_track)" class="shadow-lg bg-white rounded-full flex items-center justify-center ml-3 w-12 h-12 hover:bg-blue-800  text-gray-700 hover:text-white transition-all duration-200 ease-in-out">
                                            <font-awesome-icon class="text-2xl " :icon="['fas', 'play']" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <h2 class="text-lg font-bold color-primary">{{ latest_track.title }}</h2>
                            <p class="text-base color-muted">By {{ latest_track.user.name }}</p>
                        </div>
                    </div>
                </VueSlickCarousel>
                <div v-else class="text-center text-lg"> Data not found</div>
            </div>
        </div>
    </div>
    <div class="py-12   px-5 md:px-0 tracks__gradient ">
        <div class="container mx-auto flex justify-between">
            <h2 class="text-base md:text-2xl  font-bold uppercase text-white">Top in Genre(s)</h2>
            <div class="pl-1 flex items-center">
                <button type="button" @click="showPrev2" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-left']" />
                </button>
                <button type="button" @click="showNext2" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-right']" />
                </button>
                <nuxt-link to="tracks" class="button__normal text-white py-1 ml-1 md:ml-3 px-3 md:px-5 rounded-full">View All</nuxt-link>
            </div>
        </div>
        <div class="container mx-auto py-8">
            <div class="-mx-5">
                <VueSlickCarousel v-bind="slickOptions" ref="carousel2" v-if="get_top_in_genres.length > 0">
                    <div class="slide" v-for="top_in_genre in get_top_in_genres" :key="top_in_genre.id">
                        <div class="py-2 mx-5 custom__carousel hover__area">
                            <div class="relative">
                                <img v-if="top_in_genre.image != null" :src="imgurl + 'storage/'+ top_in_genre.image" width="100" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" height="100" alt="">
                                <div class="overlay absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 rounded-lg transition-all duration-200 ease-in-out">
                                    <div class="flex justify-center items-center h-full">

                                        <button v-if="getDatas.includes(top_in_genre.id)" class="px-4 shadow-lg bg-white py-2 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-200 ease-in-out">Added to Cart</button>
                                        <button @click="addToCart(top_in_genre)" v-else class="px-4 shadow-lg bg-white py-2 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-200 ease-in-out">Add to Cart</button>

                                        <button v-if="isPlaying && (data.id === top_in_genre.id )" @click="pause" class="shadow-lg bg-white rounded-full flex items-center justify-center ml-3 w-12 h-12 hover:bg-blue-800  text-gray-700 hover:text-white transition-all duration-200 ease-in-out">
                                            <font-awesome-icon class="text-2xl " :icon="['fas', 'pause']" />
                                        </button>
                                        <button v-else @click="playing(top_in_genre)" class="shadow-lg bg-white rounded-full flex items-center justify-center ml-3 w-12 h-12 hover:bg-blue-800  text-gray-700 hover:text-white transition-all duration-200 ease-in-out">
                                            <font-awesome-icon class="text-2xl " :icon="['fas', 'play']" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <h2 class="text-lg font-bold color-primary">{{ top_in_genre.title }}</h2>
                            <p class="text-base color-muted">By {{ top_in_genre.user.name }}</p>
                        </div>
                    </div>

                </VueSlickCarousel>
                <div v-else class="text-center text-lg text-white"> Data not found</div>
            </div>
        </div>
    </div>
    <div class="py-10  px-5 md:px-0">
        <div class="container mx-auto flex justify-between">
            <h2 class="text-base md:text-2xl  font-bold uppercase color-primary">Feature Beats</h2>
            <div class="pl-1 flex items-center">
                <button type="button" @click="showPrev3" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-left']" />
                </button>
                <button type="button" @click="showNext3" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl color-primary" :icon="['fas', 'arrow-alt-circle-right']" />
                </button>
                <nuxt-link to="tracks" class="button__gradient text-white py-1 ml-1 md:ml-3 px-3 md:px-5 rounded-full">View All</nuxt-link>
            </div>
        </div>
        <div class="container mx-auto py-8">
            <div class="-mx-5">
                <VueSlickCarousel v-bind="slickOptions" ref="carousel3" v-if="get_feature_tracks.length > 0">
                    <div class="slide" v-for="feature_track in get_feature_tracks" :key="feature_track.id">
                        <div class="py-2 mx-5 custom__carousel hover__area">
                            <div class="relative">
                                <img v-if="feature_track.image != null" :src="imgurl + 'storage/'+ feature_track.image" width="100" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" height="100" alt="">
                                <div class="overlay absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 rounded-lg transition-all duration-200 ease-in-out">
                                    <div class="flex justify-center items-center h-full">

                                        <button v-if="getDatas.includes(feature_track.id)" class="px-4 shadow-lg bg-white py-2 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-200 ease-in-out">Added to Cart</button>
                                        <button @click="addToCart(feature_track)" v-else class="px-4 shadow-lg bg-white py-2 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-200 ease-in-out">Add to Cart</button>

                                        <button v-if="isPlaying && (data.id === feature_track.id )" @click="pause" class="shadow-lg bg-white rounded-full flex items-center justify-center ml-3 w-12 h-12 hover:bg-blue-800  text-gray-700 hover:text-white transition-all duration-200 ease-in-out">
                                            <font-awesome-icon class="text-2xl " :icon="['fas', 'pause']" />
                                        </button>
                                        <button v-else @click="playing(feature_track)" class="shadow-lg bg-white rounded-full flex items-center justify-center ml-3 w-12 h-12 hover:bg-blue-800  text-gray-700 hover:text-white transition-all duration-200 ease-in-out">
                                            <font-awesome-icon class="text-2xl " :icon="['fas', 'play']" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <h2 class="text-lg font-bold color-primary">{{ feature_track.title }}</h2>
                            <p class="text-base color-muted">By {{ feature_track.user.name }}</p>
                        </div>
                    </div>
                </VueSlickCarousel>
                <div v-else class="text-center text-lg"> Data not found</div>
            </div>
        </div>
    </div>
    <AddToCart />
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import AddToCart from '@/components/addToCart'
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    components: {
        VueSlickCarousel,
        AddToCart
    },
    data() {
        return {
            imgurl: process.env.imgUrl,
            isPlaying: false,
            data: {},
            term: '',
            slickOptions: {
                "slidesToShow": 4,
                "slidesToScroll": 4,
                "initialSlide": 0,
                "arrows": false,
                "responsive": [{
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }
        }
    },
    methods: {
        ...mapActions({
            setDataAudio: 'audio/setaudioData',
            setPause: 'audio/setPause',
            setCartData: 'cart/setCartData',
            fetch_latest_tracks: 'fetch_latest_tracks',
            top_in_genres: 'top_in_genres',
            fetch_feature_tracks: 'fetch_feature_tracks',
        }),
        showPrev1() {
            this.$refs.carousel.prev()
        },
        showNext1() {
            this.$refs.carousel.next()
        },
        showPrev2() {
            this.$refs.carousel2.prev()
        },
        showNext2() {
            this.$refs.carousel2.next()
        },
        showPrev3() {
            this.$refs.carousel3.prev()
        },
        showNext3() {
            this.$refs.carousel3.next()
        },
        playing(data) {
            this.setDataAudio(data);
        },
        pause() {
            this.setPause();
        },
        addToCart(data) {
            this.setCartData(data)
        },
        searchQuery() {
            this.$router.push({
                path: 'search',
                query: {
                    q: this.term
                }
            })
        }
    },
    computed: {
        ...mapGetters({
            get_latest_tracks: 'get_latest_tracks',
            get_top_in_genres: 'get_top_in_genres',
            get_feature_tracks: 'get_feature_tracks',
            getdata: 'audio/getData',
            getPause: 'audio/getPause',
            getPlay: 'audio/getPlay',
            getDatas: 'cart/getDatas',
        }),
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
    },
    mounted() {
        this.fetch_latest_tracks()
        this.top_in_genres()
        this.fetch_feature_tracks()
    },

}
</script>

<style lang="scss">
.banner__title {
    text-shadow: 1px 2px 3px #222;
    font-size: 65px;
}

@media only screen and (max-width: 760px) {
    .banner__title {
        font-size: 45px;
    }
}

.tracks__gradient {
    background: transparent linear-gradient(252deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
}

.button__gradient {
    background: transparent linear-gradient(180deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;
}

.button__normal {
    background: #0E3D67;
}
</style>
