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
        console.log(commit);
        console.log("actions/SET_LOGIN call", data);
        // commit("SET_LOGIN", "SET_LOGIN 테스트");
        return null;
    },
};

const mutations = {
    SET_LOGIN(state, result_data) {
        console.log("state ==", state, result_data);
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
