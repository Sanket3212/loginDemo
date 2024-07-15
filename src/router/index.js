import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/login.vue';
import AdminDashboard from '../pages/AdminDashboard.vue';
import UserDashboard from '../pages/UserDashboard.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/admin-dashboard', component: AdminDashboard },
  { path: '/user-dashboard', component: UserDashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
