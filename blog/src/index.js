import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//BroserRouter - works with browser history
//Route - react component provides configuration for routes (=where to go)
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import reducers from './reducers';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        {/*
            Router matches all components...
            Switch choosed just one from them...
            (without a switch, the /posts/new will display both components)
        */}
        <Switch>
          <Route path="/posts/new" component={PostNew} />
          <Route path="/"  component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
