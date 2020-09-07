<template>
<div>
    <Header />
    <main>
        <Nuxt />
    </main>
    <Footer />
</div>
</template>

<script>
import Header from './header';
import Footer from './footer';
export default {
    components: {
        Header,
        Footer,
    }
}
</script>
