<template>
  <div class="add">
    <div class="container">
      <div class="add_data w-75 m-auto  rounded-lg bg-info py-5 px-3">
        <div class="row w-100">
      <form action="" class=" w-75 m-auto" @submit.prevent="addForms">
        
          <div class="form-group  col-md-10  col-sm-12">
            <label for=""></label>
            <input
              type="file"
              class="form-control-file mb-3"
              name=""
              id=""
              placeholder=""
              aria-describedby="fileHelpId"
              @change="onFileSelected"
            />
          </div>
          <div class="form-group  col-md-10 col-sm-12">
            <input
              type="email"
              v-model="email"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Email"
            />
          </div>
          <div class="form-group  col-md-10 col-sm-12">
            <input
              type="text"
              v-model="first_name"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Frist Name"
            />
          </div>
          <div class="form-group  col-md-10 col-sm-12">
            <input
              type="text"
              v-model="last_name"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Last Name"
            />
          </div>
          <button type="submit" class="btn btn-outline-light mt-3 col-sm-6 ml-5 ">
            Add Users
          </button>
        
      </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addUsers",
  data() {
    return {
      email: "",
      first_name: "",
      last_name: "",
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    },
    addForms() {
      this.$store.dispatch("AddData", {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        avatar: this.selectedFile,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .add{
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    .form-group{
      margin: auto;
      .form-control{
        margin-bottom: 10px;
      }
    }
  }
</style>
