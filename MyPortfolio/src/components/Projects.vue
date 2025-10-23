<template>
  <section class="projects">
    <h2>My Projects</h2>
    <div class="project-list">
      <div class="project" v-for="project in projects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">View Project</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

const projects = ref([
  {
    id: 1, title: "FIAP LOGGER", description: "This is a discord bot made in python for logging in discord servers", link: "https://github.com/BOBEIRAS/FIAP"
  },
  {
    id: 2, title: "Password Locker", description: "A C# Windows Forms app to store and view passwords", link: "https://github.com/BOBEIRAS/PasswordLocker"
  }
])
</script>

<style scoped>
.projects {
  padding: 2rem;
  background-color: #0f0f0f;
  color: #e0e0e0;
  font-family: 'Orbitron', sans-serif;
  border: 2px solid #ff0055;
  border-radius: 15px;
  box-shadow: 0 0 15px #ff0055;
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #ff0055;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.project {
  border: 2px solid #ff0055;
  padding: 1rem;
  border-radius: 8px;
  background-color: #1a1a1a;
  box-shadow: 0 0 10px #ff0055;
}

.project h3 {
  color: #ff0055;
  margin-bottom: 0.5rem;
}

.project p {
  color: #e0e0e0;
  margin-bottom: 1rem;
}

.project a {
  color: #ff0055;
  text-decoration: none;
  font-weight: bold;
}

.project a:hover {
  text-decoration: underline;
}
</style>
