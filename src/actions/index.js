import api from '../utils/api'


export const FETCH_POSTS = 'FETCH_POSTS';
export function fetchPosts() {
  const request = api.Posts.getList();
  return {
    type: FETCH_POSTS,
    payload: request
  }
}