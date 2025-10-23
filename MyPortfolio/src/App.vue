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
 font-family: 'Orbitron', Arial, sans-serif;
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
  color: #ff0080;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

nav a:hover {
  color: #ff0055;
  font-weight: bold;
  text-shadow: 0 0 10px #ff0080;
}
</style>
