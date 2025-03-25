<template>
  <div class="cart">
    <h2>Panier</h2>
    <div v-if="cart.items.length === 0">Votre panier est vide.</div>
    <ul>
      <li v-for="(item, index) in cart.items" :key="index">
        <span>{{ item.name }} - {{ item.price }}€</span>
        <div class="quantity-control">
          <button @click="cart.removeItem(item.id)">-</button>
          <p>{{ item.quantity }}</p>
          <button @click="cart.addItem(item)">+</button>
        </div>
      </li>
    </ul>
    <div v-if="cart.items.length > 0">
      <p class="total">Total: {{ cart.total }}€</p>
    </div>
  </div>
</template>


<script>
  import { useCartStore } from '../store/cart-store.ts';
  export default {
    setup() {
      const cart = useCartStore();
      return { cart };
    }
  };
</script>

<style scoped>

  .cart {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
  }
  h2 {
    font-size: 26px;
    color: #e67e22;
    margin-bottom: 15px;
  }
  .cart div {
    font-size: 18px;
    color: #777;
    margin-bottom: 20px;
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
  .quantity-control {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  button {
    background: #27ae60;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: 0.3s;
  }
  button:hover {
    background: #219150;
    transform: scale(1.05);
  }
  p {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
  .total {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
  }
</style>
