import axios from 'axios';

export default class BaseService {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:8000/api/';
    this.axios = axios;//this axios is = to the installed axios
    this.setAxiosHeader();
  }
  
  setAxiosHeader() {
    const TOKEN = window.localStorage.getItem('loginToken');//find the token in localStorage
    if (!TOKEN) {
      return;//if there is no token, just return (there will be no token in the header, api will reject requests...)
    }
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;//if there is a token, set it up.
  }
}

export const HTTP = new BaseService().axios;
