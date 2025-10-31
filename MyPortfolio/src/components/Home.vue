<template>
  <section class="home">
    <h1 class="fade-in">Welcome to my portfolio</h1>
    <p class="slide-in-left">Hi, Im BOBEIRAS. Im a Student in Management and Programming of Information Systems passionate
         about programing,listen to music and to learn more !.</p>
    <img src="@/components/icons/pfp.jpeg" alt="Profile Picture" class="profile-pic float glow">
  </section>
</template>

<style scoped>
.home{
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(26,0,26,0.8));
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.5);
}
.profile-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 1rem;
  border: 3px solid #ff0080;
  box-shadow: 0 0 15px rgba(255, 0, 128, 0.8);
}
h1{
  color:#ff0080;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-shadow: 0 0 10px #ff0080;
}
p {
  color: #e0e0e0;
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>
