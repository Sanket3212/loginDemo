import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [
      {
        username: 'admin',
        fullName: 'Admin Officer',
        email: 'admin@example.com',
        phone: '1234567890',
        designation: 'admin',
        password: 'admin123'
      },
      {
        username: 'simran',
        fullName: 'simran sail',
        email: 'user1@example.com',
        phone: '0987654321',
        designation: 'user',
        userId: 1,
        password: 'sim123'
      }
    ],
    currentUser: null
  }),
  actions: {
    loginUser(username, password) {
      const user = this.users.find(u => u.username === username && u.password === password);
      if (user) {
        this.currentUser = user;
        return true;
      } else {
        return false;
      }
    },
    addUser(user) {
      this.users.push(user);
    }
  }
});
