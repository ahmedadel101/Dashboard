<template>
  <div class="AllUsere">
    <div class="container">
      <div class="row">
         <div class="col-lg-4 col-md-6 col-sm-12" v-for="user in allData" :key="user.id" >
        <div class="user-info" >
          <div class="card  mt-2" >
            <img :src="user.avatar" class="img-fluid" :alt="user.frist_name" />
            <div class="card-body">
              <h5 class="card-title">{{ user.first_name }} {{ user.last_name }}</h5>
              <p class="card-text">{{ user.email }}</p>
              <button class="btn btn-outline-danger p-2" @click="DeleteUsers(user.id)">Delete</button>
              <router-link :to="{name:'EditUser',params:{id:user.id , avatar:user.avatar , email:user.email , first_name:user.first_name , last_name:user.last_name }}" 
              class="btn btn-outline-primary ml-2 p-2 ">Edit  </router-link>
            </div>
          </div>
          </div>
        </div>
        <div class="Down w-100 d-flex justify-content-around">
          <div class="pagenations mt-3">
            <nav aria-label="Page  navigation">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li v-for="page in pages" :key="page" class="page-item">
                  <a class="page-link" href="#">{{ page }}</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="add-user mt-3 pl-5 w-25">
            <router-link class="nav-link btn btn-outline-info " to="/AddUser" exact>Add Users</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "user",
  data() {
    return {
      pages: ["1", "2"]
    };
  },

  methods: {
    ...mapActions(["itemUser", "DeleteUsers"]),
    //  goTodetail(Id) {    this.$router.push({name:'EditUser',params:{Pid:Id}})  }  
  },
  computed: mapGetters(["allData"]),

  created() {
    this.itemUser();
    this.DeleteUsers();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
  width: 75%;
  margin: auto;
}
</style>
