import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
  //console.log("reducing: " + action.type);
  switch(action.type){
    case FETCH_POSTS:
      //return map (id, post) instead of list for better navigation
      return _.mapKeys(action.payload.data, 'id');

    case FETCH_POST:
      //const post = action.payload.data;
      //const state = { ...state, };//all state we have right now
      //newState[post.id] = post; //add new property
      //return newState;

      //the lines above rewritten into ES6
      return { ...state, [action.payload.data.id] : action.payload.data };

    case DELETE_POST:
      //return all posts but the deleted one
      //payload is deleted post id
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
