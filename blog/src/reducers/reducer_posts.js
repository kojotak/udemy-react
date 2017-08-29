import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_POSTS:
      //return map (id, post) instead of list for better navigation
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
