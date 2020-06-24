<template>
  <div class="Users">
   <AllUsers />
   
  </div>
</template>

<script>
// @ is an alias to /src
import AllUsers from "@/components/AllUsers.vue";
export default {
  name: "Users",
  components: {
    AllUsers,
    

  }
};
</script>
