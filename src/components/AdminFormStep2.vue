<!-- AdminFormStep2.vue -->
<template>
    <q-form @submit="nextStep">
      <q-select v-model="user.designation" :options="['admin', 'user']" label="Designation" required />
      <q-input v-if="user.designation === 'user'" v-model="user.userId" label="User ID" required />
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
  