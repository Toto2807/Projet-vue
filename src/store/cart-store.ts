import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },
  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    updateQuantity(id, quantity) {
      const item = this.items.find(item => item.id === id);
      if (item) item.quantity = quantity;
    },
    removeItem(itemId: number) {
      const item = this.items.find(i => i.id === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.items = this.items.filter(i => i.id !== itemId);
        }
      }
    }    
  }
});
