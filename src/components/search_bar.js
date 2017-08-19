import React, {Component} from 'react';

//function is stateless and not very useful here...
//const SearchBar = () => {
//  return <input />;
//}

class SearchBar extends Component {

  constructor(props){
    super(props);//do not forget

    //initialize state
    this.state = {term: 'Search'};
  }

  render(){
    return  (
      <div className="search-bar">
        {/* //logging
            onChange={ (event) => console.log(event.target.value) }
        */}
        <input
          value={this.state.term}
          onChange={
            (event) => this.setState({
              term: event.target.value
          })
        }/>
        {/*
          Value of the input: {this.state.term}
        */}
      </div>
    )
  }
}

export default SearchBar;
