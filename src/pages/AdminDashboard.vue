<template>
  <q-layout class="background">
    <q-page-container>
      <q-page>
        <div class="dashboard-container">
          <div class="header">
            <div class="welcome-container">
              <div class="text-h5">Welcome, {{ user.fullName }}</div><br>
              <div class="text-h6">Admin Dashboard</div>
            </div>
            <div class="logout-container">
              <q-btn color="primary" label="Logout" @click="logout" />
            </div>
          </div>
          <div class="form-container">
            <div class="text-h7">CREATE NEW USER</div>
            <component :is="currentStep" :user="newUser" @next-step="nextStep" @create-user="createUser" />
          </div>
          <q-btn color="primary" label="Show All Users" @click="showUsers" class="show-users-btn" />
          <q-dialog v-model="showUserDialog">
            <q-card>
              <q-card-section>
                <div class="text-h6">All Users</div>
              </q-card-section>
              <q-card-section>
                <q-list bordered separator>
                  <q-item v-for="user in users" :key="user.userId">
                    <q-item-section>
                      <div>{{ user.fullName }} ({{ user.username }})</div>
                      <div>{{ user.email }} - {{ user.phone }}</div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="Close" @click="showUserDialog = false" />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from 'stores/userStore';
import AdminFormStep1 from 'components/AdminFormStep1.vue';
import AdminFormStep2 from 'components/AdminFormStep2.vue';
import AdminFormStep3 from 'components/AdminFormStep3.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    AdminFormStep1,
    AdminFormStep2,
    AdminFormStep3
  },
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const user = userStore.users.find(u => u.username === 'admin');
    const newUser = ref({
      username: '',
      fullName: '',
      email: '',
      phone: '',
      designation: 'user',
      userId: null
    });
    const currentStep = ref('AdminFormStep1');
    const showUserDialog = ref(false);

    const nextStep = () => {
      if (currentStep.value === 'AdminFormStep1') {
        currentStep.value = 'AdminFormStep2';
      } else if (currentStep.value === 'AdminFormStep2') {
        currentStep.value = 'AdminFormStep3';
      }
    };

    const createUser = () => {
      const userExists = userStore.users.some(u => u.username === newUser.value.username);
      if (userExists) {
        alert('Username already exists. Please choose a different username.');
        return;
      }
      userStore.addUser(newUser.value);
      alert('User created successfully');
      newUser.value = {
        username: '',
        fullName: '',
        email: '',
        phone: '',
        designation: 'user',
        userId: null
      };
    };

    const logout = () => {
      router.push('/');
    };

    const showUsers = () => {
      showUserDialog.value = true;
    };

    return { user, newUser, currentStep, nextStep, createUser, logout, showUsers, showUserDialog, users: userStore.users };
  }
};
</script>

<style scoped>
.background {
  background-image: url('C:/Users/sails/Desktop/vue/demoprojectt/bg2.jpg'); /* Background image */
  background-size: cover;
  background-position: center;
}
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.welcome-container {
  text-align: center;
  margin-left: 500px; /* Adjust vertical spacing */
}

.text-h5 {
  font-size: 36px;
  font-weight: bold;
  color: #0259f9;
}

.text-h6 {
  font-size: 24px;
  font-weight: bold;
  color: #070707;
}

.text-h7 {
  font-size: 15px;
  font-weight: bold;
  color: #070707;
  text-align: center;
}

.logout-container {
  position: absolute;
  top: 10px;
  left: 1300px;
}

.form-container {
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.show-users-btn {
  margin-top: 20px;
}

.q-btn {
  margin-top: 20px;
}
</style>
