//this is an action creator and should return an action
//action must have a type and some payload
//tip: extract type as constant instead of string
export function selectBook(book){
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
