<template>
  <q-layout class="login-layout">
    <q-page-container>
      <q-page class="login-page">
        <q-card class="login-card">
          <q-card-section>
            <div class="text-h6">LOGIN</div>
          </q-card-section>
          <q-card-section>
            <q-form @submit.prevent="handleSubmit">
              <q-input v-model="username" label="Username" outlined dense />
              <q-input v-model="password" type="password" label="Password" outlined dense />
              <q-btn type="submit" label="Login" color="primary" class="full-width q-mt-md" />
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore';

export default {
  setup() {
    const router = useRouter();
    const userStore = useUserStore();
    const username = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      console.log('handleSubmit called'); // Debugging line
      const loggedIn = userStore.loginUser(username.value, password.value);
      console.log('loggedIn:', loggedIn); // Debugging line
      if (loggedIn) {
        console.log('User logged in:', userStore.currentUser); // Debugging line
        if (userStore.currentUser.designation === 'admin') {
          await router.push('/admin-dashboard');
        } else {
          await router.push('/user-dashboard');
        }
      } else {
        alert('Invalid username or password');
      }
    };

    return { username, password, handleSubmit };
  }
};
</script>

<style scoped>
.login-layout {
  background-image: url('C:\Users\sails\Desktop\vue\demoprojectt\bg2.jpg'); /* Background image */
  background-size: cover;
  background-position: center;
}

.login-page {
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9); /* White background with transparency */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.full-width {
  width: 100%;
}
.text-h6 {
  font-size: 25px;
  font-weight: bold;
  color: #540cfc;
  text-align: center;
}

</style>
