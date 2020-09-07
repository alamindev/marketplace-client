<template>
<div>
    <div class="py-24 bg-center bg-no-repeat bg-cover bg-indigo-600 bg-opacity-50" style="background-image: url('/banner.jpeg');     background-blend-mode: darken;">
        <div class="container mx-auto">
            <div class="w-full md:w-9/12 lg:w-8/12 px-5 md:px-0 flex justify-center flex-col items-center md:items-start">
                <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase text-center md:text-left">A Place To Buy Beats From The world's Best producers</h1>
                <h2 class="text-2xl font-medium text-white pt-3 pb-6 text-center md:text-left">Find the perfect Beat for you project </h2>
                <div class="relative  w-2/3 lg:w-1/2 pb-10 lg:pb-20">
                    <input type="text" placeholder="Search" name="search" class="w-full py-3 pl-5 pr-10 border-none rounded-full">
                    <font-awesome-icon class="text-xl text-gray-500 absolute right-0 mr-5 mt-4" :icon="['fas', 'search']" />
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
                <h2 class="text-xl text-indigo-800 font-medium pb-3 text-center">Buy Tracks</h2>
                <p class="text-base text-indigo-800 text-center">Buy tracks you think you like. Doing this will abtain you a license</p>
            </div>
        </div>
        <div class="py-6 px-3 lg:px-12 bg-blue-100 rounded-md shadow flex justify-center flex-col items-center">
            <div class="w-20 h-20 rounded-full bg-indigo-900 flex justify-center items-center">
                <font-awesome-icon class="text-3xl text-white" :icon="['fas', 'bomb']" />
            </div>
            <div class="py-3">
                <h2 class="text-xl text-indigo-800 font-medium pb-3 text-center">Buy Tracks</h2>
                <p class="text-base text-indigo-800 text-center">Buy tracks you think you like. Doing this will abtain you a license</p>
            </div>
        </div>
        <div class="py-6 px-3 lg:px-12 bg-blue-100 rounded-md shadow flex justify-center flex-col items-center">
            <div class="w-20 h-20 rounded-full bg-indigo-900 flex justify-center items-center">
                <font-awesome-icon class="text-3xl text-white" :icon="['fas', 'bowling-ball']" />
            </div>
            <div class="py-3">
                <h2 class="text-xl text-indigo-800 font-medium pb-3 text-center">Buy Tracks</h2>
                <p class="text-base text-indigo-800 text-center">Buy tracks you think you like. Doing this will abtain you a license</p>
            </div>
        </div>
    </div>
    <div class="py-5 px-5 md:px-0">
        <div class="container mx-auto flex justify-between">
            <h2 class="text-base md:text-2xl font-bold uppercase text-indigo-800">Latest Tracks</h2>
            <div class="pl-1 flex items-center">
                <button type="button" @click="showPrev1" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl text-indigo-800" :icon="['fas', 'arrow-alt-circle-left']" />
                </button>
                <button type="button" @click="showNext1" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl text-indigo-800" :icon="['fas', 'arrow-alt-circle-right']" />
                </button>
                <a href="#" class="bg-indigo-800 text-white py-1 ml-1 md:ml-3 px-3 md:px-5 rounded-full">View All</a>
            </div>
        </div>
        <div class="container mx-auto py-8">
            <div class="-mx-5">
                <VueSlickCarousel v-bind="slickOptions" ref="carousel">
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-1.jpg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">Dynamite</h2>
                            <p class="text-base text-gray-400">By BTS</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-2.jpeg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">BlAME IT ON</h2>
                            <p class="text-base text-gray-400">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-3.jpg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">Blinding lights</h2>
                            <p class="text-base text-gray-400">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-4.jpeg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">Tap In</h2>
                            <p class="text-base text-gray-400">By Saweetie</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-3.jpg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">Blinding lights</h2>
                            <p class="text-base text-gray-400">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-2.jpeg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">BlAME IT ON</h2>
                            <p class="text-base text-gray-400">By DaBaby</p>
                        </div>
                    </div>

                </VueSlickCarousel>
            </div>
        </div>
    </div>
    <div class="py-12   px-5 md:px-0 bg-gradient-to-r from-indigo-800  to-blue-500">
        <div class="container mx-auto flex justify-between">
            <h2 class="text-base md:text-2xl  font-bold uppercase text-white">Top in Genre(s)</h2>
            <div class="pl-1 flex items-center">
                <button type="button" @click="showPrev2" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl text-indigo-800" :icon="['fas', 'arrow-alt-circle-left']" />
                </button>
                <button type="button" @click="showNext2" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl text-indigo-800" :icon="['fas', 'arrow-alt-circle-right']" />
                </button>
                <a href="#" class="bg-indigo-800 text-white py-1 ml-1 md:ml-3 px-3 md:px-5 rounded-full">View All</a>
            </div>
        </div>
        <div class="container mx-auto py-8">
            <div class="-mx-5">
                <VueSlickCarousel v-bind="slickOptions" ref="carousel2">
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-1.jpg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-white">Dynamite</h2>
                            <p class="text-base text-gray-400">By BTS</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-2.jpeg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-white">BlAME IT ON</h2>
                            <p class="text-base text-gray-400">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-3.jpg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-white">Blinding lights</h2>
                            <p class="text-base text-gray-400">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-4.jpeg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-white">Tap In</h2>
                            <p class="text-base text-gray-400">By Saweetie</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-3.jpg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-white">Blinding lights</h2>
                            <p class="text-base text-gray-400">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-2.jpeg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-white">BlAME IT ON</h2>
                            <p class="text-base text-gray-400">By DaBaby</p>
                        </div>
                    </div>

                </VueSlickCarousel>
            </div>
        </div>
    </div>
    <div class="py-10  px-5 md:px-0">
        <div class="container mx-auto flex justify-between">
            <h2 class="text-base md:text-2xl  font-bold uppercase text-indigo-800">Feature Beats</h2>
            <div class="pl-1 flex items-center">
                <button type="button" @click="showPrev3" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl text-indigo-800" :icon="['fas', 'arrow-alt-circle-left']" />
                </button>
                <button type="button" @click="showNext3" class="border-none bg-transparent px-1">
                    <font-awesome-icon class="text-3xl text-indigo-800" :icon="['fas', 'arrow-alt-circle-right']" />
                </button>
                <a href="#" class="bg-indigo-800 text-white py-1 ml-1 md:ml-3 px-3 md:px-5 rounded-full">View All</a>
            </div>
        </div>
        <div class="container mx-auto py-8">
            <div class="-mx-5">
                <VueSlickCarousel v-bind="slickOptions" ref="carousel3">
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-1.jpg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">Dynamite</h2>
                            <p class="text-base text-gray-400">By BTS</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-2.jpeg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">BlAME IT ON</h2>
                            <p class="text-base text-gray-400">By DaBaby</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-3.jpg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">Blinding lights</h2>
                            <p class="text-base text-gray-400">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-4.jpeg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">Tap In</h2>
                            <p class="text-base text-gray-400">By Saweetie</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-3.jpg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">Blinding lights</h2>
                            <p class="text-base text-gray-400">By the Weekend</p>
                        </div>
                    </div>
                    <div>
                        <div class="py-2 mx-5 custom__carousel">
                            <img src="/img-2.jpeg" class="w-full rounded-lg mb-2 shadow border border-gray-700 h-64 object-cover" alt="tracks">
                            <h2 class="text-lg font-bold text-indigo-800">BlAME IT ON</h2>
                            <p class="text-base text-gray-400">By DaBaby</p>
                        </div>
                    </div>

                </VueSlickCarousel>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
export default {
    components: {
        VueSlickCarousel
    },
    data() {
        return {
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
    },
}
</script>

<style lang="scss"> 
</style>
