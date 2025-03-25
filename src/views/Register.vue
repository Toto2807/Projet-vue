<template>
    <div class="register">
      <h2>Inscription</h2>
      <form @submit.prevent="register">
        <input v-model="name" type="text" placeholder="Nom" required maxlength = "40"/>
        <input v-model="email" type="email" placeholder="Email" required maxlength = "200"/>
        <input v-model="password" type="password" placeholder="Mot de passe" required />
        <button type="submit">S'inscrire</button>
      </form>
      <p>Déjà un compte ? <RouterLink to="/login">Se connecter</RouterLink></p>
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
      
      const name = ref('');
      const email = ref('');
      const password = ref('');
  
      const register = () => {
        auth.register({ name: name.value, email: email.value, password: password.value });
        router.push('/');
      };
  
      return { name, email, password, register };
    }
  };
</script>
  
<style scoped>

    .register {
      max-width: 400px;
      margin: 50px auto;
      padding: 50px;
      background: white;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      text-align: center;
    }
    
    h2 {
      color: #2c3e50;
    }
    
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    
    button {
      width: 100%;
      padding: 10px;
      background: #27ae60;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      transition: 0.3s;
    }
    
    button:hover {
      background: #219150;
    }

</style>
  