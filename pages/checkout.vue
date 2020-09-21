<template>
<div class="w-full py-10 px-5 md:px-0 container mx-auto">
    <h3 class="color-primary text-3xl pb-12 text-center font-medium">Checkout</h3>
    <p v-if="error" class="text-center pb-10 text-lg text-red-600 ">{{ error }}</p>
    <div class="flex w-6/12 mx-auto">

        <form action="" @submit.prevent="paynow">
            <div class="wrapper w-full px-8 py-8">
                <div class="py-5">
                    <div class="wrapper__input pb-8">
                        <the-mask required mask="#### #### #### ####" placeholder="cart Number" v-model="card.card_number" name="card_number" id="card_number" class="number__appearance px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full"></the-mask>
                    </div>
                    <div class="grid lg:grid-cols-3 gap-5">
                        <div class="wrapper__input pb-8">
                            <input required type="text" placeholder="Name of cart" v-model="card.card_name" name="card_name" id="card_name" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
                        </div>
                        <div class="wrapper__input pb-8">
                            <input required v-cleave="{date: true,datePattern: ['m','y']}" v-model="card.mmyy" placeholder="MM / YY" name="mmyy" id="mmyy" class=" px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
                        </div>
                        <div class="wrapper__input pb-8">
                            <the-mask required v-model="card.cvc" mask="###" placeholder="CVC" name="cvc" id="cvc" class=" px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full"></the-mask>
                        </div>
                    </div>
                </div>
                <div class="py-3 flex justify-center">
                    <button type="submit" class="subscription__btn_one text-white rounded-full w-48 py-2 " v-if="!loading"> Pay </button>
                    <button type="button" class="subscription__btn_one text-white rounded-full w-48 py-2" v-else>
                        <div class="loadersm loader-sm"></div>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    middleware: ['auth'],
    data() {
        return {
            loading: false,
            card: {
                card_number: '',
                card_name: '',
                mmyy: '',
                cvc: ''
            },
            error: ''
        }
    },
    computed: {
        ...mapGetters({
            getCartDatas: 'cart/getCartDatas',
            getTotal: 'cart/getTotal',
            cartDataCount: 'cart/cartDataCount',
        })
    },
    methods: {

        paynow() {
            if (this.cartDataCount !== 0) {
                let vm = this;
                // this.loading = true;
                this.$axios.post(
                    'checkout', {
                        card: this.card,
                        cart_info: this.getCartDatas,
                    }
                ).then(({
                    data
                }) => {

                    console.log(data)
                }).catch(error => {
                    let {
                        data
                    } = error.response;
                    if (data.success == false) {
                        vm.error = data.errors
                    }
                });
            } else {
                this.$swal({
                    title: "Car is empty!",
                })
            }

        }

    },
    created() {
        if (!this.authenticated) {
            this.$router.push('login?redirect=checkout');
        }

    }
}
</script>

<style lang="scss">
.wrapper {
    box-shadow: 0px 0px 49px #4285C24D;
    border-radius: 20px;
}

.wrapper__gradient {
    background: transparent linear-gradient(90deg, #0E3D67 0%, #4285C2 100%) 0% 0% no-repeat padding-box;

}

.subscription__btn_one {
    background: transparent linear-gradient(180deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;

    &:hover {
        background: transparent linear-gradient(90deg, #105b9d 0%, #378bda 100%) 0% 0% no-repeat padding-box;
    }
}
</style>
