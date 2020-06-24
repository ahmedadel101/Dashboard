<template>
  <div class="App-Header">
    <div class="container-fluid bg-info">
      <div class="container ">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <a class="navbar-brand" href="#">User Information</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <router-link class="nav-link " tag="li" to="/" exact>
                <a class="text-light">Users</a></router-link>
              <router-link class="nav-link" tag="li" to="/login">
                <a class="text-light">Login</a></router-link>
              <router-link class="nav-link" tag="li" to="/Register">
                <a class="text-light">Register</a></router-link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHeader",
};
</script>
<style lang="scss" scoped></style>
