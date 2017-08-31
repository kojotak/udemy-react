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
        {/* filled up from validation by redux-form */}
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values){
    console.log("submit: " + values);
  }

  render(){
    //vooodoo magic handle for form submit
    const { handleSubmit} = this.props;

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">Home</Link>
        </div>

        <h3>Create new post</h3>
        {/*
            redux does not handle form submitting (to some backend server)
            we have to handle it manually
        */}
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {/*
              the Field itself is just "a thing" which communicates with redux;
              component in field is function for displaying input field;
              label is our optional attribute passed to inner component;
          */}
          <Field
            name="title"
            label="Title"
            component={this.renderField}>
          </Field>
          <Field
            name="categories"
            label="Categories"
            component={this.renderField}>
          </Field>
          <Field
            name="content"
            label="Post content"
            component={this.renderField}>
          </Field>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

//values: everything the user has send with the formReducer
const validate = values => {
  console.log(values); // {title: "asdf", categories: "foo, bar", content: "test"}

  const errors = {};

  if(!values.title){
    //we are matching field names for validation error keys
    errors.title = "Title can not be empty";
  } else if(values.title.length < 3){
    errors.title = "Title is too short";
  }

  if(!values.categories){
    errors.categories = "Categories can not be empty";
  }

  if(!values.content){
    errors.content = "Post content can not be empty";
  }

  //empty errors => form is OK to submit (otherwise invalid)
  return errors;
}

//we pass single argument - function - for form configuration:
//form: unique identifier
//validate: reference to validation function
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostNew);
