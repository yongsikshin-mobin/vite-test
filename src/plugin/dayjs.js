import dayjs from "dayjs";

export default {
    install(Vue) {
        const prototype = Vue.prototype;
        prototype.$dayjs = dayjs;
    }
};
