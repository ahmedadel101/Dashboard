import axios from "axios";

const state = {
    token: sessionStorage.getItem('token') || null,
};

const getters = {
    login: (state, token) => state.token = token
};

const actions = {
    async login({ commit }, data) {

        axios.post('https://reqres.in/api/login', {
                email: data.email,
                password: data.password
            })
            .then(res => {
                const token = res.data.token;
                sessionStorage.setItem('token', token)
                sessionStorage.setItem('user', data.email)
                commit('login', token)
                console.log('success', res)
            })
            .catch(err => console.log('error', err))
    },
    register({ commit }, data) {
        axios.post('https://reqres.in/api/register', {
                email: data.email,
                password: data.password
            })
            .then(res => {
                console.log('success', res)
                commit('register', data)
            })
            .catch(err => console.log('error', err))


    },

};
const mutation = {
    login: (state, tokens) => state.token = tokens
}


export default {
    state,
    getters,
    actions,
    mutation
};