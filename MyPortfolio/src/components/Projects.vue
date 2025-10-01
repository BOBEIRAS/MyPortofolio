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
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.project {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}
</style>
