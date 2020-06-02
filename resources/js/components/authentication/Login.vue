<template>
  <form @submit.prevent="login">

    <h3>Login</h3>
    <!-- Error diplaying -->
    <div v-if="errors" class="alert alert-danger">
      {{ errors }}
    </div>

    <!-- Loading displaying -->
    <h3 v-if="loading" class="alert alert-warning">
      Loading...
    </h3>

    <div class="form-group">
      <label for="email">Email</label>
      <input v-model="email" type="email" class="form-control" id="email" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="password" type="password" class="form-control" id="password" required>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
import { authService } from '../service/authService';
export default {
  name: 'Login',
  data(){
    return {
      email: '',
      password: '',
      errors: '',
      loading: false,
    }
  },
  methods:{
    login(){
      this.loading = true;
      authService.login(this.email, this.password)
      .then(() => {
        //this.setLoggedIn();
        this.loading = false;
        this.$router.push('/tools');
      })
      .catch((error) => {
        console.dir(error);
        if (error.response && error.response.status === 400) {
          this.errors = error.response.data.error;
        } else {
          console.dir(error);
        }
        this.loading = false;
      });
    }

    
  }

}
</script>
