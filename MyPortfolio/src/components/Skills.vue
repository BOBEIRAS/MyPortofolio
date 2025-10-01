<<template>
  <section class="skills">
    <h2>My Skills</h2>
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref(['HTML', 'CSS', 'JavaScript', 'Vue.js', 'C#'])
</script>

<style scoped>
.skills {
  padding: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f0f0f0;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 4px;
}
</style>
