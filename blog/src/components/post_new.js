import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostNew extends Component {

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Home
          </Link>
        </div>
        Hello
      </div>
    );
  }
}

export default PostNew;
