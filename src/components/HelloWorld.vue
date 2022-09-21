<template>
    <div>
        <h1>{{ msg }} 22 33 </h1>
        <button
            type="button"
            @click="count++"
        >
            count is {{ count }}ssdfsdfdfsdfsdfsdfsdfsdfsdfsdf
        </button>
    </div>
</template>
<script>
    export default {
        props: {
            msg: {
                type: String,
                default: "  sd"
            }
        },
        data() {
            console.log("test");
            console.log("test");
            console.log("test");
            console.log("test");

            console.log(import.meta.env.VITE_SOME_KEY);
            return {
                count: 0,
                test: {
                    test: 1,
                    ttt: 3
                }
            };
        }
    };
</script>

<style scoped>
</style>
