import React from 'react';

//for registering our app into DOM
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//console.developers.google.com -> YouTube Data API v3
const YOUTUBE_API_KEY='AIzaSyAwlImkLsu8MNDStYF_VLD6Avzt1VV1dZ8';

//defines Component which renders HTML
const App =  () => { //'fat arrow'same as: function()
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

//but this component have to be registered in the DOM

//naive and wrong attempt...
//React.render(App);
//this will cause an:
// Error: ReactDOM.render(): Invalid component element. Instead of passing a component class,
// make sure to instantiate it by passing it to React.createElement.

//still wrong:
//ReactDOM.render(<App/>);
// Error: _registerComponent(...):
// Target container is not a DOM element.  bundle.js:1207:16

ReactDOM.render(<App/>, document.querySelector('.container'));
//fixed by specifying target container
