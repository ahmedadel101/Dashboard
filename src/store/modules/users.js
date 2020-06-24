 import axios from "axios";
 // i I did this Vuex For Users (Get , Add , Edit , Delete) 
 // and I did 2 Components ( Add-Users.vue , AllUsers.vue) and 1 - view (users.vue)

 const state = {
     Users: [],

 };
 const getters = {
     allData: state => state.Users
 };
 const actions = {
     // here I get users From Api !! but i don't know Make Pagination !!
     itemUser({ commit }) {
         axios.get(`https://reqres.in/api/users`, )
             .then(response => {
                 console.log(response.data.data)
                 commit('getUsers', response.data.data)
             })
     },

     // here i Added  Users response "success" but => !! Image Not Upload !!
     AddData({ commit }, data) {
         axios.post('https://reqres.in/api/users?page=1', {
                 email: data.email,
                 frist_name: data.frist_name,
                 last_name: data.last_name,
                 avatar: data.avatar
             })
             .then(res => {
                 console.log('success', res.data)
                 commit('setUsers', data)
             })
     },
     // here i Removed User By id 
     DeleteUsers({ commit }, id) {
         axios.delete(`https://reqres.in/api/users?/${id}`)
             .then(res => console.log('success', res))
             .catch(err => console.log(err))
         commit('delete', id)
     },
     editUser({ commit }, data) {
         axios.put('https://reqres.in/api/users/2', {
                 email: data.email,
                 first_name: data.first_name,
                 last_name: data.last_name
             })
             .then(res => console.log('success', res.data))
         commit('updateUser', data.data)
     }

 };

 const mutations = {
     getUsers: (state, Users) => (state.Users = Users), // For Api Get Users 
     setUsers: (state, add) => state.Users.unshift(add), // For Aoi Add Users 
     delete: (state, id) => state.Users = state.Users.filter(user => user.id !== id), // For Api Delete Users 
     updateUser: (state, update) => (state.Users = update) // For Api Update Users
 }

 export default {
     state,
     getters,
     actions,
     mutations
 };