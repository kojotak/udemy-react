import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render(){
    //check for initial state (=null)
    if(!this.props.book){
      return <div>Select a book first</div>;
    }

    return (
      <div>
        <h3>Book detail</h3>
        <h4>title</h4>
        {this.props.book.title}
        <h4>pages</h4>
        {this.props.book.pages}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.ActiveBook
  }
}

export default connect(mapStateToProps)(BookDetail);
