import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

  //we need to pass some reference to field in order to connect event handlers
  //or to access passsed additional parameters such as label
  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label}</label>
        {/*
            instead of wiring all those event handlers like:
              onChange={field.input.onChange}
              onFocus={field.input.onFocus}
              onBlur={field.input.onBlur}
            we'll use a ES6 shortcut, which says "use all from": ...field.input
        */}
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
      </div>
    );
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">Home</Link>
        </div>

        <h3>Create new post</h3>
        <form>
          {/*
              the Field itself is just "a thing" which communicates with redux
              component in field is function for displaying input field
              label is our optional attribute passed to inner component
          */}
          <Field
            name="title"
            label="Title"
            component={this.renderField}>
          </Field>
          <Field
            name="tags"
            label="Tags"
            component={this.renderField}>
          </Field>
          <Field
            name="content"
            label="Post content"
            component={this.renderField}>
          </Field>
        </form>
      </div>
    );
  }
}

//we pass single argument - function - for form configuration:
//form: unique identifier
export default reduxForm({
  form: 'PostsNewForm'
})(PostNew);
