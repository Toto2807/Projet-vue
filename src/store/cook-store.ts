import { defineStore } from 'pinia';

export const useCookStore = defineStore('cooks', {
  state: () => ({
    cooks: [
      { id: 1, name: "Chef Pierre", specialty: "Cuisine Française", dishes: [
        { id: 1, name: "Coq au vin", price: 15 },
        { id: 2, name: "Ratatouille", price: 12 },
        { id: 2, name: "Boeuf Bourguignon", price: 22 }
      ]},
      { id: 2, name: "Chef Maria", specialty: "Cuisine Italienne", dishes: [
        { id: 3, name: "Pâtes Carbonara", price: 10 },
        { id: 4, name: "Pizza Margherita", price: 9 },
        { id: 5, name: "Pates à la crème de truffe", price: 18 }
      ]}
    ]
  }),
  getters: {
    getCookById: (state) => (id) => state.cooks.find(cook => cook.id == id)
  }
});
