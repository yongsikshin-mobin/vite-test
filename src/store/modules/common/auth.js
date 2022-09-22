const state = () => ({
    token: null,
});

const getters = {
    GET_TOKEN(state) {
        return state.token;
    },
};

const actions = {
    LOGIN({commit}, data) {
        console.log("actions/SET_LOGIN call", data);
        commit("SET_LOGIN", "SET_LOGIN 테스트");
    },
};

const mutations = {
    SET_LOGIN(state, result_data) {
        console.log("state ==", result_data);
        state.token = "테스트중입니다.";
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
