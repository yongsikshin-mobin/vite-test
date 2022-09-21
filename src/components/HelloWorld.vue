<template>
    <div>
        <h1>{{ msg }} 22 33 </h1>
        <button type="button" @click="count++">
            count is {{ count }}ssdfsdfdfsdf
        </button>
    </div>
</template>
<script>
export default {
    props: {
        msg: String
    },
    data() {
        console.log("test");
        console.log(import.meta.env.VITE_SOME_KEY);
        return {
            count: 0,
        };
    },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
