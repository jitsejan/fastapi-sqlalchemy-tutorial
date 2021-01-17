<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          required
          v-model="user.email"
          name="email"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          class="form-control"
          id="password"
          required
          v-model="user.password"
          name="password"
        />
      </div>

      <button @click="saveUser" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUser">Add</button>
    </div>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: "create-user",
  data() {
    return {
      user: {
        id: null,
        email: "",
        password: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveUser() {
      var data = {
        email: this.user.email,
        password: this.user.password
      };

      UserDataService.create(data)
        .then(response => {
          this.user.id = response.user.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newUser() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>