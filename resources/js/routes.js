import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Customers from './components/customers/Customers';
import Tools from './components/tools/Tools';

export const routes = [
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/customers', name: 'customers', component: Customers },
    { path: '/tools', name:'tools', component: Tools },
];

