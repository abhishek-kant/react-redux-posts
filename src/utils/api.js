import axios from 'axios'
let api = {
  Posts: {}
}

const BASE_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "f1da4f7a-ba83-4c54-a7ba-2d8a1f800cc6"

api.Posts.getList = () => {
  return axios.get(`${BASE_URL}/posts`, {
    params: {key: API_KEY}
  })
};

api.Posts.get = (id) => {
  return axios.get(`${BASE_URL}/posts/${id}`, {
    params: {key: API_KEY}
  })
};

api.Posts.create = (formData) => {
  return axios.post(`${BASE_URL}/posts`, {
    key: API_KEY,
    ...formData
  })
};

export default api

