<template>
  <div class="cart-container">
    <Navbar />
    <h2>Mon Panier</h2>
    <Cart />
    <button class="checkout-btn" @click="checkout">Passer commande</button>
  </div>
</template>

  
<script setup>
  import Cart from '../components/Cart.vue';
  import { useCartStore } from '../store/cart-store';
  
  const cartStore = useCartStore();
  
  const checkout = () => {
    alert('Commande validée !');
    cartStore.items = [];
  };
</script>
  
<style scoped>

  .cart-container {
    min-height: 100vh;
    padding: 20px;
    background: linear-gradient(-45deg, #ff007f, #ff6a00, #00d2ff, #8a2be2);
    background-size: 200% 200%;
    animation: gradient 10s ease infinite;
    text-align: center;
  }
  h2 {
    font-size: 28px;
    color: black;
    margin-bottom: 20px;
  }
  .checkout-btn {
    background: #27ae60;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s;
    margin-top: 20px;
  }
  .checkout-btn:hover {
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
  