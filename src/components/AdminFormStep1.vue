<!-- AdminFormStep1.vue -->
<template>
    <q-form @submit="nextStep">
      <q-input v-model="user.username" label="Username" required />
      <q-input v-model="user.fullName" label="Full Name" required />
      <q-input v-model="user.email" label="Email" required />
      <q-input v-model="user.phone" label="Phone Number" required />
      <q-btn type="submit" label="Next" color="primary" />
    </q-form>
  </template>
  
  <script>
  export default {
    props: ['user'],
    methods: {
      nextStep() {
        this.$emit('next-step');
      }
    }
  };
  </script>
  
  