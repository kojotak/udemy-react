import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class ShowPost extends Component {
  componentDidMount(){
    //access id from the url using destructuring
    const {id} = this.props.match.params;

    this.props.fetchPost(id);
  }

  render(){
    const { post } = this.props;
    console.log("render post " + post);
    if(!post){
      return <div>Loading...</div>;
    }
    return(
      <div>
        <Link className="btn" to="/">Back</Link>
        <h3>{post.title}</h3>
        <h6>categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

//first arg: state
//second arg: optional parameter for properties of this component
function mapStateToProps({posts}, ownProps){
  //return just one post... no need to return all the posts
  return { post : posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost})(ShowPost);
