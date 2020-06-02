import BaseService from './baseService';
import { EventBus } from '../../eventbus';
export default class AuthService extends BaseService {

  register(name, email, password, password_confirmation){
    return new Promise((resolve, reject) => {
      this.axios.post('register', { name, email, password, password_confirmation})
      .then((response) => {
        this.localStorageSetUp(response);
        EventBus.$emit('loginSuccesfullyDone');
        resolve(response.data.token);
      }).
      catch((error) => {
        console.log('Error from register authService', error.response.data);
        reject(error);
      })
    });
  }
  
  //TODO Losi - ez itt Promise alapu funkcio. I would like to transform this into a async/await style function. Is that possible? How? The response here would have to be used for 2 things. 1-return the response to the calling function 2-use as an argument with the localStorageSetup().Would it work if we save the response to a variable, and use this variable would be used wit the localStorageSetup()? I am kinda gueaasing that it wont, because we would storing a Promise? But would it work, if we combine it here with an await for the localStorageSetup()?
  login(email, password) {
    return new Promise((resolve, reject) => {
      this.axios.post('login', { email, password })
        .then((response) => {
          this.localStorageSetUp(response);
          EventBus.$emit('loginSuccesfullyDone');
          resolve(response.data.token);
        }).
        catch ((error) => {
          console.dir(error);
          console.log('Error from login authService');
          reject(error);
        })
    });
  }

 

  localStorageSetUp(response) {
    window.localStorage.setItem('loginToken', response.data.token);
    window.localStorage.setItem('user_id', response.data.id);
    this.setAxiosHeader();
  }


  logout() {
    window.localStorage.removeItem('loginToken');
    window.localStorage.removeItem('user_id');
    delete this.axios.defaults.headers.common['Authorization'];
  }
}
export const authService = new AuthService();

