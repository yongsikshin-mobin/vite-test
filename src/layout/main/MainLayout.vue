<template>
    <div class="main-layout-container">
        <div>left 화면</div>
        <div>
            <MainLayoutHeader />
            <MainLayoutBody />
            <MainLayoutFooter />
        </div>
    </div>
</template>

<script>
    import MainLayoutHeader from "./MainLayoutHeader.vue";
    import MainLayoutBody from "./MainLayoutBody.vue";
    import MainLayoutFooter from "./MainLayoutFooter.vue";

    export default {
        name: "MainLayout",
        components: {MainLayoutHeader, MainLayoutBody, MainLayoutFooter}
    };
</script>

<style scoped>
    .main-layout-container {
        display: flex;
        margin: auto;
        width: fit-content;
        height: 100vh;
    }

    @media screen and (max-width: 1080px) {
        .main-layout-container > div:first-child {
            display: none;
        }
    }
</style>
