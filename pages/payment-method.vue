<template>
<div class="w-full py-10 px-5 md:px-0 container mx-auto">
    <h3 class="color-primary text-3xl pb-12 text-center font-medium">Payment Method</h3>
    <div class="flex w-6/12 mx-auto">
        <div class="wrapper w-full px-8 py-8">
            <div class="py-5">
                <div class="pb-5">
                    <input type="radio" id="payment-1" name="payment-type" checked>
                    <label for="payment-1" class=" py-1 "> <span class="color-blue-500 font-bold ml-2">Credit card</span></label>
                </div>
                <div class="wrapper__input pb-8">
                    <input required type="number" placeholder="Card Number" name="card_number" id="card_number" class="number__appearance px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
                </div>
                <div class="grid lg:grid-cols-3 gap-5">
                    <div class="wrapper__input pb-8">
                        <input required type="text" placeholder="Name of card" name="card_name" id="card_name" class="px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
                    </div>
                    <div class="wrapper__input pb-8">
                        <input required type="text" placeholder="MM / YY" name="mmyy" id="mmyy" class=" px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
                    </div>
                    <div class="wrapper__input pb-8">
                        <input required type="text" placeholder="CVV" name="cvv" id="cvv" class=" px-5 py-2 border border-gray-400 focus:outline-none text-gray-600 rounded-full w-full">
                    </div>
                </div>
            </div>
            <div class="py-3">
                <input type="radio" id="payment-2" name="payment-type">
                <label for="payment-2" class=" py-1"> <span class="paypal ml-2"></span></label>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper {
    box-shadow: 0px 0px 49px #4285C24D;
    border-radius: 20px;
}

.wrapper__gradient {
    background: transparent linear-gradient(90deg, #0E3D67 0%, #4285C2 100%) 0% 0% no-repeat padding-box;
}

.subscription__btn_one {
    background: transparent linear-gradient(180deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;
}

.paypal {
    background: transparent url('/images/paypal.png') 0% 0% no-repeat;
    width: 148px;
    display: block;
    height: 28px;
    background-size: 100px;
    background-position: left;
}
</style>
