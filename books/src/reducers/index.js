import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active';

//combines all reducers to provide the whole application state
//maps one reducer for one key
const rootReducer = combineReducers({
    books: BooksReducer,
    active: ActiveBook
});

export default rootReducer;
