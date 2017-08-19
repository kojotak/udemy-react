import React, {Component} from 'react';

//for registering our app into DOM
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

//console.developers.google.com -> YouTube Data API v3
const YOUTUBE_API_KEY='AIzaSyAwlImkLsu8MNDStYF_VLD6Avzt1VV1dZ8';


class App extends Component {
  constructor(props){
    super(props);

    //empty array of videos is initial state
    this.state = { videos: [] };

    //initialize youtube search component
    //will block for a while
    YTSearch(
      {key:YOUTUBE_API_KEY, term: 'Game of thrones'},
      (videos) => {
        //ES6 syntactic sugar, equas: {videos:videos}
        this.setState({videos})
      }
    );
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
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
