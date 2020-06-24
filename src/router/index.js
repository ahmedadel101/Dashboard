import { createRouter, createWebHistory } from "vue-router";
import user from "../views/users.vue";
import login from "../views/Auth/Login.vue";
import EditUser from "../components/Edit-User.vue"
import Register from '../views/Auth/Register.vue';
import addUsers from '../components/Add-User.vue';



// const User = {
//     template: '<div>User {{ $route.params.id }} hello </div>'
// }
const routes = [{
        path: "/",
        name: "users",
        component: user,

    },
    {
        path: "/edituser/:id",
        name: "EditUser",
        component: EditUser

    },

    {
        path: "/login",
        name: " login",
        component: login
    },
    {
        path: "/Register",
        name: "Register",
        component: Register
    },
    {
        path: "/AddUser",
        name: "addUser",
        component: addUsers
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;