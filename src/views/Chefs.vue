<template>
  <div class="cooks-container">
    <h2>Nos Cuisiniers</h2>
    <div class="cooks-grid">
      <router-link v-for="cook in cookStore.cooks" :key="cook.id" :to="'/cook/' + cook.id">
        <CookCard class="cook-card" :cook="cook" />
      </router-link>
    </div>
  </div>
</template>

  
<script setup>
  import { useCookStore } from '../store/cook-store';
  import CookCard from '../components/CookCard.vue';
  
  const cookStore = useCookStore();
</script>
  
<style scoped>

  .cooks-container {
    min-height: 100vh;
    background: linear-gradient(-45deg, #ff007f, #ff6a00, #00d2ff, #8a2be2);
    background-size: 200% 200%;
    animation: gradient 10s ease infinite;
    padding: 20px;
    text-align: center;
  }
  h2 {
    font-size: 32px;
    color: #000000;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .cooks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  .cook-card {
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .cook-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }
  .cooks-grid a {
    text-decoration: none;
  }
  @keyframes gradient {
      0% {
          background-position: 0% 50%;
      }
  
      50% {
          background-position: 100% 50%;
      }
  
      100% {
          background-position: 0% 50%;
      }
  }
</style>  