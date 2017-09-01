import axios from 'axios';

export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=kojotak42';

export function fetchPosts(){
  const url = `${ROOT_URL}/posts${API_KEY}`;
  console.log("fetching all " + url);
  const request = axios.get(url);
  //we are returning promise
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

//callback - what to do after successfull submit`
export function createPost(values, callback ){
  const url = `${ROOT_URL}/posts${API_KEY}`;
  console.log("posting " + url);
  const request = axios.post(url, values).then( ()=>callback() );
  return {
    type: CREATE_POSTS,
    payload: request
  }
}

export function fetchPost(id){
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  console.log("fetching one " + url);
  const request = axios.get(url);
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback){
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  console.log("deleting one " + url);
  const request = axios.delete(url).then( ()=>callback() );

  //return the id of the deleted post so we know
  //what has been deleted
  return {
    type: DELETE_POST,
    payload: id
  }
}
