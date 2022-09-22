import Vue from "vue";
import Vuex from "vuex";
import commonAuth from "./modules/common/auth";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        commonAuth
    }
});
