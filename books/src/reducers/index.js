import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active';

//combines all reducers to provide the whole application state
const rootReducer = combineReducers({
    books: BooksReducer,
    ActiveBook: ActiveBook
});

export default rootReducer;
