<template>
  <section class="about">
    <h2 class="fade-in">About Me</h2>
    <div class="profile-container">
      <img class="profile-pic slide-in-left glow" src="@/components/icons/pfp.jpeg" alt="Profile Picture" />
      <div class="about-text slide-in-right">
        <p>Why me? I am a student of <strong>Management and Programming of Information Systems</strong>,
          passionate about technology, problem-solving, and continuous learning.</p>
        <p>I enjoy working with programming, databases, and IT systems management,
          and I am always looking for opportunities to improve my skills and gain
          hands-on experience.</p>
        <p><strong>Education:</strong>  Course in Management and Programming of Information Systems (GPSI) –<a href="https://site.ae-salvaterra.pt/">GPSI</a>, 2024-2025</p>
        <p><strong>Experience:</strong>
           Personal projects in web development and system programming
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

.about {
  max-width: 800px;
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

.profile-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #ff0055;
  box-shadow: 0 0 10px #ff0055;
  object-fit: cover;
}

.about-text p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.5;
}

a {
  color: #ff0055;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}


</style>
