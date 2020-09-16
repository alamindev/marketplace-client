<template>
<div class="w-full py-10 px-5 md:px-0 container mx-auto">
    <h3 class="color-primary text-xl pb-6 text-left font-bold">Buyer Dashboard</h3>
    <div class="w-full mx-auto">
        <div class="wrapper w-full">
            <table class="lg:w-full table-auto  overflow-y-scroll">
                <thead>
                    <tr class="text-left">
                        <th class="w-32"></th>
                        <th class="color-blue-500 py-4 px-5">Product title</th>
                        <th class="color-blue-500 py-4 px-5">Genre</th>
                        <th class="color-blue-500 py-4 px-5">Seller Name</th>
                        <th class="color-blue-500 py-4 px-5">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td class="text-gray-600 px-5 py-3"><img src="/images/admin/17.png" width="100" height="100" alt=""></td>
                        <td data-column="Full Name" class="text-gray-600 px-5 py-2">Kings & Queens</td>
                        <td data-column="Email" class="text-gray-600 px-5 py-2">Kings & Queens</td>
                        <td data-column="Invite Code" class="text-gray-600 px-5 py-2">alamin</td>
                        <td data-column="Invite Code" class="text-gray-600 px-5 py-2">12.32</td>
                        <td class="text-gray-600 px-5 py-2">
                            <button class="px-10 py-2 btn-bg rounded-full text-white">download</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    middleware: ['auth', 'buyer'],
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

.custom__img-btn {
    background: transparent url('/images/path-img-41.svg') 0% 0% no-repeat;
    width: 50px;
    display: block;
    height: 50px;
    background-size: 25px;
    background-position: center;
}

.custom__img-btn:hover {
    background: transparent url('/images/path-img-40.svg') 0% 0% no-repeat;
    width: 50px;
    display: block;
    height: 50px;
    background-size: 25px;
    background-position: center;
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
