import React, {Component} from 'react';

//connect function connects react to redux
import { connect } from 'react-redux';

//we choose BookList as a container for redux
class BookList extends Component {
  renderList(){
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item">
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

//from redux:
export default connect(mapStateToProps)(BookList);
