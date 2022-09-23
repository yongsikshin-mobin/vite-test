import axios from "axios";
import router from "../router";
import vuex from "../store";
import Vue from "vue";
import {UNAUTHORIZED, NOTFOUND, SUCCESS, REJECTED} from "@/assets/js/constant/httpStatus";

const DOMAIN = process.env.VITE_APP_API_URL;
/**
 *
 * @param method
 * @param url
 * @param data
 * @param option = { excel: Boolean , multipart: Boolean, externalUrl: String }  (default : {})
 * @returns {Promise<AxiosResponse<any>>}
 */
const request = (method, url, data = {}, option = {}) => {
    const axiosOption = {
        method,
        data,
        timeout: 15000,
        options: {withCredentials: true},
    };
    optionConvert(url, axiosOption, option);

    return axios(axiosOption).then(async result => {
        Vue.prototype.$closeLoading();
        if(Number(result.data.result_code) !== REJECTED && Number(result.data.result_code) !== SUCCESS && Number(result.data.result_code) !== NOTFOUND && !option?.excel && !option?.externalUrl) {
            await openDialog(result.data.result_msg ? result.data.result_msg : "서버에 문제가 발생했습니다. 관리자에게 문의해주세요.");
        }
        return result;
    })
        .catch(async result => {
            Vue.prototype.$closeLoading();
            if(!result.response) {
                await openDialog("네트워크 에러입니다. 관리자에게 문의해주세요.");
                throw result;
            }

            const {status} = result.response;

            let resultMessage = "";
            switch(status) {
            case UNAUTHORIZED:
                resultMessage = "로그인이 필요합니다. 로그인 페이지로 이동됩니다.";
                break;
            case NOTFOUND:
                resultMessage = "서버 주소를 찾을 수 없습니다. 관리자에게 문의 바랍니다.";
                break;
            default:
                resultMessage = result.response.data.result_msg;
            }
            await openDialog(resultMessage, status);
            throw result.response;
        });
};

const openDialog = async (message = "", status) => {
    if(!vuex.getters["common/IS_DIALOG"]) {
        vuex.commit("common/SET_DIALOG", true);
        Vue.prototype.$dialog.info({
            title: "알림",
            text: message,
        })
            .then(() => {
                vuex.commit("common/SET_DIALOG", false);
                if(status === UNAUTHORIZED) {
                    onUnauthorized();
                }
            });
    }
};

const optionConvert = (url, axiosOption,  option) => {
    const headers = {};
    if(option?.excel) {
        axiosOption.responseType = "arraybuffer";
    }
    if(option?.multipart) {
        headers["Content-Type"] = "multipart/form-data";
    }

    axiosOption.url = option?.externalUrl ? option.externalUrl : DOMAIN + url;
    axiosOption.headers = headers;
};

const onUnauthorized = () => {
    if(localStorage.getItem("token") !== null) localStorage.removeItem("token");
    const authUrl = Vue.prototype.$getAuthUrl();
    router.push(`${authUrl}/login?rPath=${encodeURIComponent(location.pathname)}`);
};

// 인증 토큰 정보 세팅
export const setAuthInHeader = token => {
    axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;
    axios.defaults.headers.common["RequestReferrer"] = window.location.search.replace("?","");
};

export default request;
