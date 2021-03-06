import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostIndex extends Component {

  //when the action creator will be called?
  //usually after some event... but which?
  //called immediately when this component appeared in DOM
  //it's React's lifecycle method
  //don't make typo in this function name!
  componentDidMount(){
    //console.log("componentDidMount ... " + JSON.stringify(this.props.posts));

    //start fetching posts...
    this.props.fetchPosts();
    //console.log("componentDidMount ... " + JSON.stringify(this.props.posts) + " ... done");
  }

  renderPosts(){
    return _.map(this.props.posts, post=>{
        //console.log("render post: " + post.id);
        return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
    });
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          {/*
              creates <a> which looks like a button
              links are better for navigation (from the event point of view)
            */}
          <Link className="btn btn-primary" to="/posts/new">
            Add new
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  //console.log("mapStateToProps " + JSON.stringify(state.posts));
  return {posts : state.posts};
}

//ES6: equals to {fetchPosts:fetchPosts}
//we are passing action creator here...
export default connect(mapStateToProps, { fetchPosts })(PostIndex);
