<template>
    <div>
        <h1 class="font-30">
            {{ msg }} 22 33
        </h1>
        <button
            type="button"
            @click="chagePassword"
        >
            count is {{ count }}
        </button>
        getToken == {{ GET_TOKEN }}
    </div>
</template>
<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        props: {
            msg: {
                type: String,
                default: "  sd"
            }
        },
        data() {
            console.log("test", this.$dayjs().format("YYYY-MM-DD"));
            console.log(import.meta.env.VITE_SOME_KEY);
            return {
                count: 0,
                test: {
                    test: 1,
                    ttt: 3
                }
            };
        },
        computed: {
            ...mapGetters({
                GET_TOKEN: "commonAuth/GET_TOKEN"
            })
        },
        methods: {
            ...mapActions({
                LOGIN: "commonAuth/LOGIN"
            }),
            chagePassword() {
                console.log("this gettoken", this.GET_TOKEN);
                this.LOGIN("TEst data");
            }
        }
    };
</script>

<style lang="scss" scoped>
    $len: 100;
    @for $i from 1 through $len {
        .font-#{$i} {
            font-size: $i + px;
        }
    }

</style>
