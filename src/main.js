import Vue from "vue";
import App from "./App.vue";
import router from "../router/router/index.js";

Vue.use(router);

new Vue({
    router,
    render: (h) => h(App)
}).$mount("#app");
