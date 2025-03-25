<template>
    <div class="home">
      <Navbar />
      <h1>Bienvenue sur CookShop</h1>
      <p>Découvrez nos cuisiniers et leurs plats faits maison !</p>
      <div class="lien">
        <router-link to="/cooks">Voir les cuisiniers</router-link>
        <router-link to="/login">Se connecter</router-link>
      </div>
    </div>
</template>
  
<style scoped>

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(-45deg, #ff007f, #ff6a00, #00d2ff, #8a2be2);
    background-size: 200% 200%;
    animation: gradient 10s ease infinite;
    color: white;
    text-align: center;
    padding: 40px 20px;
  }
  h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  .lien {
    display: flex;
    gap: 20px;
  }
  .lien a {
    text-decoration: none;
    background: #2c3e50;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    transition: 0.3s;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
  .lien a:hover {
    background: #34495e;
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