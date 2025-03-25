<template>
  <div v-if="cook" class="cook-details">
    <h2>{{ cook.name }}</h2>
    <p>{{ cook.specialty }}</p>
    <h3>Plats disponibles :</h3>
    <ul>
      <li v-for="dish in cook.dishes" :key="dish.id">
        {{ dish.name }} - {{ dish.price }}€
        <button @click="addToCart(dish)">Ajouter au panier</button>
      </li>
    </ul>
  </div>
</template>

  
<script setup>
    import { useRoute } from 'vue-router';
    import { useCookStore } from '../store/cook-store';
    import { useCartStore } from '../store/cart-store';
    
    const route = useRoute();
    const cookStore = useCookStore();
    const cartStore = useCartStore();
    
    const cook = cookStore.getCookById(route.params.id);
    
    const addToCart = (dish) => {
      cartStore.addItem(dish);
    };
</script>

<style scoped>

  .cook-details {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
  }
  h2 {
    font-size: 28px;
    color: #e67e22;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    color: #555;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 22px;
    margin-top: 20px;
    color: #2c3e50;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
  }
  button {
    background: #27ae60;
    color: white;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: 0.3s;
  }
  button:hover {
    background: #219150;
    transform: scale(1.05);
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
