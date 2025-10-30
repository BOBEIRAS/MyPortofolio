<template>
  <section class="skills">
    <h2>My Skills</h2>
    <div class="skill-list">
      <div class="skill" v-for="skill in skills" :key="skill.name">
        <div class="skill-header">
          <Icon :icon="skill.icon" class="skill-icon" />
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-percentage">{{ skill.percentage }}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ '--percentage': skill.percentage + '%' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const skills = ref([
  { name: 'HTML', icon: 'logos:html-5', percentage: 100 },
  { name: 'CSS', icon: 'logos:css-3', percentage: 85 },
  { name: 'JavaScript', icon: 'logos:javascript', percentage: 25 },
  { name: 'Vue.js', icon: 'logos:vue', percentage: 35 },
  { name: 'C#', icon: 'logos:c-sharp', percentage: 95 }
])
</script>

<style scoped>
.skills {
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

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill {
  background: #1a1a1a;
  border: 2px solid #ff0055;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 10px #ff0055;
}

.skill-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-icon {
  width: 2rem;
  height: 2rem;
  color: #ff0055;
}

.skill-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff0055;
}

.skill-percentage {
  font-size: 1rem;
  color: #e0e0e0;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(255, 0, 85, 0.5);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff0055, #ff0080);
  border-radius: 10px;
  animation: fill 2s ease-out forwards;
  width: 0%;
  position: relative;
  overflow: hidden;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 50%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes fill {
  0% {
    width: 0%;
  }
  50% {
    width: calc(var(--percentage) * 1.1);
  }
  100% {
    width: var(--percentage);
  }
}
</style>
