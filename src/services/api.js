import axios from 'axios'

const API =axios.create({
    baseURL : 'https://server-eoco.onrender.com/api',
    withCredentials: true //agar cookies la use ho raha he 
});
export default API;