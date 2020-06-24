import Vuex from "vuex";
import Auth from "./modules/Auth.js";
import users from "./modules/users.js";

// load vuex

export default new Vuex.Store({
    modules: {
        Auth,
        users
    },
});