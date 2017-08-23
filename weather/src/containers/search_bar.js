import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''};

    //problem... 'this' has mystery context in onInputChange
    //so we have to bind it this context
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    //'this' is here some mystery context during callback execution
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    //every form is send after pressing enter
    //and we don't need it... so we'll prevent it
    event.preventDefault();

    //fetch data
    //we are using 'this' -> need to bind onFormSubmit in constructor
    this.props.fetchWeather(this.state.term);

    //clear input text and re-render
    this.setState({term: ''});
  }

  render(){
    return(
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}
        >
        <input
          placeholder="Get a five-day forecast in yout favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

//ensure that action reaches our middleware
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

//1st parameter does not care about state, just props
export default connect(null, mapDispatchToProps)(SearchBar);
