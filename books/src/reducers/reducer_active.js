//state argument is not the global one!
//it's only state which this reducer takes care of
//state = null: ES6 for default value in order to avoid 'undefined'
export default function(state = null, action){

  //reducers are called for each action
  switch(action.type){
    case 'BOOK_SELECTED':
      //always return fresh object
      return action.payload;
  }

  //return the original state for other refucers
  //do not return 'undefined'
  return state;
}
