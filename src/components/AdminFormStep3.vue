<!-- AdminFormStep3.vue -->
<template>
    <div>
      <div>Username: {{ user.username }}</div>
      <div>Full Name: {{ user.fullName }}</div>
      <div>Email: {{ user.email }}</div>
      <div>Phone Number: {{ user.phone }}</div>
      <div>Designation: {{ user.designation }}</div>
      <div v-if="user.designation === 'user'">User ID: {{ user.userId }}</div>
      <q-btn @click="createUser" label="Create New User" color="primary" />
    </div>
  </template>
  
  <script>
  export default {
    props: ['user'],
    methods: {
      createUser() {
        this.$emit('create-user');
      }
    }
  };
  </script>
  