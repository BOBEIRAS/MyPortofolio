<template>
  <section class="contact">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <input v-model="form.name" type="text" placeholder="Name" required>
      <input v-model="form.email" type="email" placeholder="Email" required>
      <textarea v-model="form.message" placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <p>Email: your.email@example.com</p>
    <p>LinkedIn: <a href="#">Your LinkedIn</a></p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  alert('Form submitted! (In a real app, this would send data to a server)')
  // Reset form
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

input, textarea {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  height: 100px;
}

button {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #369870;
}
</style>
