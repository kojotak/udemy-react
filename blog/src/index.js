import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//BroserRouter - works with browser history
//Route - react component provides configuration for routes (=where to go)
import { BrowserRouter, Route  } from 'react-router-dom';

import reducers from './reducers';
import PostIndex from './components/post_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
