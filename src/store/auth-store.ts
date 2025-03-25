import { defineStore } from 'pinia';

interface User {
  name: string;
  email: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null') as User | null,
    users: JSON.parse(localStorage.getItem('users') || '[]') as User[],
    isAuthenticated: false,
  }),

  actions: {
    register(newUser: User) {
      const users = JSON.parse(localStorage.getItem('users') || '[]') as User[];

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      this.user = newUser;
      this.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(newUser));
    },

    login(userData: { email: string; password: string }) {
      const users = JSON.parse(localStorage.getItem('users') || '[]') as User[];
      const foundUser = users.find(user => user.email === userData.email && user.password === userData.password);
      if (foundUser) {
        this.user = foundUser;
        localStorage.setItem('user', JSON.stringify(foundUser));
        console.log('Connexion réussie.'); //Test perso
        this.isAuthenticated = true;
      } else {
        alert('Utilisateur non trouvé ou mot de passe incorrect.');
        console.log('Utilisateur non trouvé ou mot de passe incorrect.');// Test aussi perso
        this.isAuthenticated = false;
        return;
      }
    },

    logout() {
      this.user = null;
      localStorage.removeItem('user');
    }
  }
});
