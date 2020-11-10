import axios from 'axios';

export const baseURL = 'https://genxapp.herokuapp.com/api/v1/';

const api = axios.create({
  baseURL,
});

export default api;
