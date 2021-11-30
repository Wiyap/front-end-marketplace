import axios from 'axios'
import Cookies from 'js-cookie'

const API = axios.create({ baseURL: 'http://localhost:3000' });

API.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    'Content-Type': 'application/json',
    'Authorization': `Bearer   ${headers.Authorization || Cookies.get('token')}`,
  },
}));

// eslint-disable-next-line no-unused-vars
const handleCatchError = (error) => {
  if (error.response) {
    console.log(error)
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
}

const handleJwt = (response) => {
  if (response.headers.authorization) {
    const jwt = response.headers.authorization.split(" ")[1]
    Cookies.set('token', jwt)
  }
}

export default class APIManager {

  static async registerUser(email, password, passwordConfirmation, username) {
    const response = await API.post('/users',
      {
        user:
          { email, password, password_confirmation: passwordConfirmation, username, admin: true }
      });
    handleJwt(response)
    return { ...response.data, status: response.status };
  }

  static async signInUser(email, password) {
    const response = await axios(
      { 
        url: 'http://localhost:3000/users/sign_in', 
        method: 'post',
        data: { user: {email, password} }
      }
    );
    handleJwt(response)
    console.log(response)
    return {...response.data, status: response.status};
  }
  static async signInUserJwt(){
    const response = await API.post('/users/sign_in')
    handleJwt(response)
    console.log(response)
    return response.data
  }

  static async signOutUser() {
    const response = await API.delete('/users/sign_out')
    Cookies.remove("token")
    return { ...response.data, status: response.status };
  }

  static async showRealEstateList() {
    const response = await API.get('/real_estates')
    return {...response.data, status: response.status};
  }
  
  static async uploadAvatar(formData) {
    const response = await axios({
      url: `http://localhost:3000/avatars`,
      method: 'post',
      data: formData
    })
    return { ...response.data, status: response.status };
  }

}