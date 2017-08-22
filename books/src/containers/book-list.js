import React, {Component} from 'react';

//connect function: connects react to redux
import { connect } from 'react-redux';

//conects actions to refux
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux';

//we choose BookList as a container for redux
class BookList extends Component {
  renderList(){
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={()=>this.props.selectBook(book)}
          >
          {book.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//from redux: whatever we return from here will show up as props inside BookList
function mapStateToProps(state){
  return {
    books: state.books,
  };
}

//register action creator (handler)
//whatever we return from here will show up as props inside BookLists
function mapDispatchToProps(dispatch){
  //whenever selecBook is called, the result should be passed to all reducers
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch)
}

//redux: connect mappings from state and from dispatched actions to BookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
