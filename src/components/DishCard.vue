<template>
  <div class="dish-card">
    <h4>{{ dish.name }}</h4>
    <p>{{ dish.price }}€</p>
    <button @click="addToCart">Ajouter au panier</button>
  </div>
</template>
  
<script setup>
  import { useCartStore } from '../store/cart-store';
  
  defineProps(['dish']);
  const cartStore = useCartStore();
  
  const addToCart = () => {
    cartStore.addItem(dish);
  };
</script>
  
<style scoped>
  .dish-card {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
  