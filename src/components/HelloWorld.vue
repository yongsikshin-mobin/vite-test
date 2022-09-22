<template>
    <div>
        <h1>{{ msg }} 22 33 </h1>
        <button
            type="button"
            @click="chagePassword"
        >
            count is {{ count }}ssdfsdfdfsdfsdddfsdfsdfsdfsdfsdf
        </button>
    </div>
</template>
<script>
    import {mapActions} from "vuex";
    export default {
        props: {
            msg: {
                type: String,
                default: "  sd"
            }
        },
        data() {
            console.log("test");
            console.log(import.meta.env.VITE_SOME_KEY);
            return {
                count: 0,
                test: {
                    test: 1,
                    ttt: 3
                }
            };
        },
        methods: {
            ...mapActions({
                LOGIN: "commonAuth/LOGIN",
            }),
            chagePassword() {
                console.log("chage paswoord call", this);
                this.LOGIN();
            },
        }
    };
</script>

<style scoped>

</style>
