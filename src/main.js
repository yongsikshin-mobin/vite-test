import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import pluginDayjs from "./plugin/dayjs.js";
import "./style/helper.scss";

Vue.use(pluginDayjs);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
