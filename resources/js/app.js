require('./bootstrap');

import Vue from 'vue';

//VueRouter code
import VueRouter from 'vue-router';
import { routes } from './routes';
//TODO Losi just to check, the { routes } above means that we are extracting only the 
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history',
});

/*
Postaviti da neulogovan korisnik može da pristupi samo login i register stranicama.
Postaviti da ulogovan korisnik može da pristupi svim stranicama osim login i register
*/
router.beforeEach((to, from, next) => {
    const isThereToken = localStorage.getItem('loginToken');	//check if the user has a login token
    console.log(`Guard activated. From: ${from.path} to: ${to.path}`)	//awesome consol.log trick to see if this is working
  
    if ((to.name !== 'login' && to.name !== 'register') && !isThereToken) {	//if the user is not logged in, he can only visit the login and the register pag	e. ATTENTION: these here are route NAMES, NOT ROUTE PATHS!
  
      next('/login');
      return;
    } else if ((to.name == 'login' || to.name == 'register') && isThereToken ) {	//if the user is logged in, he can't visit login and register pages, if he does 	that, navigate him to the /movies
    
      return next('/tools');
  
    } else next();
    
});


//Global registration for the App.vue
Vue.component('App', require('./components/elements/App.vue').default);

let app = new Vue({
    el: '#app',
    router,
});






  