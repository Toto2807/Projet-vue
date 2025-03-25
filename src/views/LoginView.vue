<template>
  <div class="login">
    <h2>Connexion</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required maxlength = "200"/>
      <input v-model="password" type="password" placeholder="Mot de passe" required maxlength = "50"/>
      <button type="submit">Se connecter</button>
    </form>
    <p>Pas encore de compte ? <RouterLink to="/register">S'inscrire</RouterLink></p>
  </div>
</template>

<script>
  import { useAuthStore } from '../store/auth-store';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  export default {
    setup() {
      const auth = useAuthStore();
      const router = useRouter();
      
      const email = ref('');
      const password = ref('');

      const login = () => {
        auth.login({ email: email.value, password: password.value });
        if(auth.isAuthenticated){
          router.push('/');
        }
      };

      return { email, password, login };
    }
  };
</script>

<style scoped>

  .login {
    max-width: 400px;
    margin: 50px auto;
    padding: 50px;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
  }

  h2 {
    color: #34495e;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    width: 100%;
    padding: 10px;
    background: #2980b9;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
  }

  button:hover {
    background: #2471a3;
  }
</style>
