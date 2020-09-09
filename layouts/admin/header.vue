<template>
<header class="header-area py-4 px-4 rounded-md bg-white">
    <div class="flex justify-between items-center">
        <h1 class="text-gray-700 text-base flex items-center"><span class="block md:none">
                <font-awesome-icon class="text-xl text-gray-700 cursor-pointer bars--click" :icon="['fas', 'bars']" />
            </span>
            <span class="block ml-3 leading-none">Dashboard (Admin Panel)</span>
        </h1>
        <div class="right-area w-36 flex">
            <div class="cart relative px-5">
                <font-awesome-icon class="text-xl text-gray-700" :icon="['fas', 'shopping-cart']" />
                <div class="rounded-full p-1 w-5 h-5 bg-red-600 absolute top-0 right-0 text-xs text-white leading-none -mt-3 mr-3">11</div>
            </div>
            <div class="admin-profie flex pl-5">
                <h2 class="text-gray-700 text-base pr-2">Admin</h2>
                <img src="/images/admin-avater.svg" width="30" alt="admin-avater">
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss">
.header-area {
    box-shadow: 0pt 0pt 25pt #0000001A;
}
</style>
