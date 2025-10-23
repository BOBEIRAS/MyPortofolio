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
  background-color: #0f0f0f;
  color: #e0e0e0;
  font-family: 'Orbitron', sans-serif;
  border: 2px solid #ff0055;
  border-radius: 15px;
  box-shadow: 0 0 15px #ff0055;
}

h2 {
  color: #ff0055;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

input, textarea {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 2px solid #ff0055;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: #e0e0e0;
  font-family: 'Orbitron', sans-serif;
}

textarea {
  height: 100px;
}

button {
  background: #ff0055;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
}

button:hover {
  background: #ff0080;
  box-shadow: 0 0 10px #ff0055;
}

p {
  text-align: center;
  margin-top: 1rem;
}

p a {
  color: #ff0055;
  text-decoration: none;
}

p a:hover {
  text-decoration: underline;
}
</style>
