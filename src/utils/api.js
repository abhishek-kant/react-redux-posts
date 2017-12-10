import axios from 'axios'
let api = {
  Posts: {}
}

const BASE_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "PAPERCLIP1234"

api.Posts.getList = () => {
  return axios.get(`${BASE_URL}/posts`, {
    params: {key: API_KEY}
  })
};

export default api

