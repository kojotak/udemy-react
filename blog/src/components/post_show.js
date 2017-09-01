import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class ShowPost extends Component {
  componentDidMount(){
    //fetch post only if know the id
    if(!this.props.post){
      //access id from the url using destructuring
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick(){
    //same as in componentDidMount
    const {id} = this.props.match.params;
    this.props.deletePost(id, ()=>{
      //callback to return to home
      this.props.history.push('/');
    });
  }

  render(){
    const { post } = this.props;
    console.log("render post " + post);
    if(!post){
      return <div>Loading...</div>;
    }
    return(
      <div>
        <Link to="/">Back</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete
        </button>
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

export default connect(mapStateToProps, {fetchPost, deletePost})(ShowPost);
