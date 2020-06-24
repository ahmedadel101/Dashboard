<template>
  <div class="register-users">
    <form class="form-signin" action="#" @submit.prevent=" registerForm">
      <img class="mb-4" src="../../assets/register.png" alt width="90" height="85" />
      <h1 class="h3 mb-3 font-weight-bold">Register</h1>
      <input
        v-model="email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <input
        v-model="first_name"
        type="text"
        id="inputFname"
        class="form-control"
        placeholder="First Name"
        required
        autofocus
      />
      <input
        v-model="last_name"
        type="text"
        id="inputLname"
        class="form-control"
        placeholder="last Name"
        required
        autofocus
      />
      <input
        v-model="password"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <input
        type="file"
        @change="onselectedFiles"
        class="form-control-file"
        name
        id
        placeholder="upload picture"
        aria-describedby="fileHelpId"
      />

      <button class="btn btn-lg btn-primary mt-3 btn-block" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      first_name: "",
      last_name: "",
      selectedFile: null,
      password: ""
    };
  },
  methods: {
    onselectedFiles(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    },
    registerForm() {
      this.$store.dispatch("register", {
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
        avatar: this.selectedFile,
        password: this.password
      });
    }
  }
};
</script>

<style scoped lang="scss">
.register-users {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-signin {
    width: 100%;
    height: 50%;
    max-width: 500px;
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
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
}
</style>
