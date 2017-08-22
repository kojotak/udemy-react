import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//combines all reducers to provide the whole application state
const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;
