<template>
  <div class="login-users text-center ">
    <form class="form-signin " action="#" @submit.prevent="loginForm">
      <img
        class="mb-4"
        src="../../assets/login.png"
        alt=""
        width="90"
        height="85"
      />
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        v-model="email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
      v-model="password"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <div class="Error"  v-for="error in errInput" :key="error" > {{error}}</div>
      <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">
        Sign in
      </button>
    </form>
  </div>
</template>

<script>

// import axios from "axios";

export default {
  name: "login",
  data(){
      return{
        errInput:[],
        email: '',
        password:'',

      }
  },
  methods:{
    loginForm(){
      this.$store.dispatch('login', {
        
        email: this.email,
        password:this.password
      }) 

     
    }
  }
 
};
</script>

<style scoped lang="scss">
.login-users{
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
.form-signin {
  width: 100%;
  height: 50%;
  max-width:500px;
  padding: 15px;
  margin: auto;

  .bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

  .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

 
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
}
</style>
