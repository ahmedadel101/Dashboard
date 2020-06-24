<template>
  <div class="edit-user">
    <div class="container">
      <div class="row">


        <form class="data_info   m-auto bg-info py-5 px-4 text-light rounded-sm" @submit.prevent="editForm">
                          <div class="col-md-4 m-auto">
              <img class=" rounded-lg  mb-3" :src="$route.params.avatar" alt="" srcset="">
          </div>
          <div class="form-group d-flex col-sm-12 text-left">
            <label class="mt-2" for>First Name :</label>
            <input
              type="text"
              class="form-control w-75 ml-3"
              name="firstName"
              v-model="$route.params.first_name"  placeholder=""/>
          </div>
          <div class="form-group d-flex col-sm-12 text-left">
            <label class="mt-2" for>Last Name :</label>
            <input
              type="text"
              class="form-control w-75 ml-3"
              name="firstName"
              v-model="$route.params.last_name"
              aria-describedby="helpId"
              placeholder
            />
          </div>
          <div class="form-group  col-sm-12 text-left">
            <label class="mt-2" for>Your Email :</label>
            <input
              type="email"
              class="form-control w-75 ml-3"
              name="firstName"
              v-model="$route.params.email" aria-describedby="helpId"
              placeholder=" email"
            />
          </div>
           <router-link class="btn btn-danger  mx-3 py-2 px-4" to="/">Cancel</router-link>
          <button type="submit" class="btn btn-outline-light py-2 px-4"> Save </button>
        </form>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "EditUser",
  data(){
      return{
          first_name:'',
          last_name:'',
          email:'',
      }
  },
  methods:{
      editForm(){
        this.$store.dispatch('editUser', {
        
        email: this.email,
        first_name:this.first_name,
        last_name: this.last_name
      }) 
      }
  }
  
  
};
</script>

<style lang="scss" scoped>
.edit-user {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  .data_info{
      width: 50%;
      .form-group{
          display: flex;
      }
  }
}

@media only screen and (max-width: 480px) {
.edit-user {
  .data_info{
      width: 97%;
      .form-group{
          display: flex;
          flex-direction: column;
      }
  }
}
}
</style>

