import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=kojotak42';

export function fetchPosts(){
  const url = `${ROOT_URL}/posts${API_KEY}`;
  console.log("fetching " + url);
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
  //we are returning promise
  return {
    type: CREATE_POSTS,
    payload: request
  }
}
