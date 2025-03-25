import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CooksView from '../views/Chefs.vue';
import CookView from '../views/ChefDetail.vue';
import LoginView from '../views/LoginView.vue';
import CartView from '../views/CartView.vue';
import Register from '../views/Register.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/cooks', component: CooksView },
  { path: '/cook/:id', component: CookView },
  { path: '/login', component: LoginView },
  { path: '/cart', component: CartView },
  { path: '/register', component: Register}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
