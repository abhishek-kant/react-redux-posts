import api from '../utils/api'


export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

export function fetchPosts() {
  const request = api.Posts.getList();
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(formData, callback) {
  const request = api.Posts.create(formData)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  }
}