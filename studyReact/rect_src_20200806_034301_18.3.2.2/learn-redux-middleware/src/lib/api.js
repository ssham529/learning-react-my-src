import Axios from 'axios';

export const getPost = id =>
  Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = id =>
  Axios.get(`https://jsonplaceholder.typicode.com/users`);