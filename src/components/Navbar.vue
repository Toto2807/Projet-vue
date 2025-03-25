<template>
  <nav class="navbar">
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/cooks">Chefs</RouterLink>
    <RouterLink to="/cart">Panier</RouterLink>

    <div class="auth-buttons">
      <RouterLink v-if="!auth.user" to="/login">Connexion</RouterLink>
      <RouterLink v-if="!auth.user" to="/register">Inscription</RouterLink>
      <button v-if="auth.user" @click="logout">Déconnexion</button>
    </div>
  </nav>
</template>

<script>
  import { useAuthStore } from '../store/auth-store';

  export default {
    setup() {
      const auth = useAuthStore();

      const logout = () => {
        auth.logout();
      };

      return { auth, logout };
    }
  };
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2c3e50;
  padding: 15px 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  transition: 0.3s;
}

.navbar a:hover {
  color: #f39c12;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

button:hover {
  background: #c0392b;
}
</style>

