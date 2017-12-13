import api from '../utils/api'


export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST_DETAIL = 'FETCH_POST_DETAIL';
export const DELETE_POST = 'FETCH_POST';

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
    type: CREATE_POST
  }
}


export function fetchPostDetail(id) {
  const request = api.Posts.get(id);

  return {
    type: FETCH_POST_DETAIL,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = api.Posts.delete(id)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  }
}