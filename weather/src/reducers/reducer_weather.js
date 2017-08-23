import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
  //the payload is no promise anymore,
  //it's fetched and unwrapped using the middleware
  console.log("Action received ", action);

  switch (action.type) {
    case FETCH_WEATHER:
      //this will replace the current state entirely
      //return [action.payload.data];

      //this is BAD, do not modify state, use setState only!
      //return state.push(action.payload.data);

      //we have to return new instance of state
      //return state.concat([action.payload.data]);

      //rewritting using ES6
      return [action.payload.data, ...state];
      //use old data, append the new one and return it as new array
  }

  return state;
}
