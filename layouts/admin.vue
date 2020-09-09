<template>
<div class="bg pt-6 min-h-screen">
    <Sidebar />
    <div class="md:ml-64 px-5 main--parent">
        <Header />
        <main>
            <Nuxt />
        </main>
    </div>
</div>
</template>

<script>
import Header from './admin/header';
import Sidebar from './admin/sidebar';
export default {
    components: {
        Header,
        Sidebar,
    }
}
</script>

<style>
.bg {
    background: #F1F1F1 0% 0% no-repeat padding-box;
}

.main--parent {
    transition: 0.2s all ease-in;
}

.main--parent.showing {
    margin-left: 250px;
}
</style>
