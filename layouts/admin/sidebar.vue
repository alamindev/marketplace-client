<template>
<div class="sidebar py-5 px-5 w-64 -ml-64 md:ml-0 fixed top-0 bottom-0 left-0 sidebar--click">
    <div class="logo__area pb-3">
        <h1 class="text-white text-3xl uppercase font-semibold">Logo</h1>
    </div>
    <div class="main__link">
        <ul class="list-none">
            <li>
                <a href="" class="py-2 px-3   block rounded is-active">
                    <font-awesome-icon class="text-base text-gray-400" :icon="['fas', 'home']" />
                    <span class=" text-gray-400 text-base ml-2">Dashboard</span>
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sidebar {
    background: transparent linear-gradient(200deg, #4285C2 0%, #0E3D67 100%) 0% 0% no-repeat padding-box;
    transition: .2s all ease-in;
}

.is-active {
    background-color: #0E3D67;
}

.sidebar--click.showing {
    margin-left: 0 !important;
    z-index: 99;
}
</style>
