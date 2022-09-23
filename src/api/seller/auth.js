import http from "../http.js";

const auth = {
    join(data) {
        return http("post", "/api/v1/member", data);
    },
};

export default auth;
