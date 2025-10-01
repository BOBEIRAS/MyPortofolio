<script setup>
import { RouterLink, RouterView } from 'vue-router'  // Importa os componetes do router
</script>

<template>
  <div id ="app">
    <!-- Barra de Navegação-->
    <nav>
      <RouterLink to="/">Home</RouterLink>|
      <RouterLink to="/about">About</RouterLink>|
      <RouterLink to="/projects">Projects</RouterLink>|
      <RouterLink to="/skills">Skills</RouterLink>|
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <!-- Corpo da Página -->
    <RouterView />
  </div>
</template>

<style>
#app {
 font-family: Arial, sans-serif;
 max-width: 1200px;
 margin: 0 auto;
 padding: 0 1rem;
}

nav{
  text-align: center;
  margin-bottom: 2rem;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #42b883;
}

nav a:hover {
  color: #369870;
  font-weight: bold;
}
</style>