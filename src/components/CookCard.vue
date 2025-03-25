<template>
  <div class="cook-card">
    <h3>{{ cook.name }}</h3>
    <p>{{ cook.specialty }}</p>
    <router-link :to="'/cook/' + cook.id">Voir les plats</router-link>
  </div>
</template>
  
<script setup>
  defineProps(['cook']);
</script>
  
<style scoped>
  .cook-card {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
  