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
import PostShow from './components/post_show';
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
            the :id is wildcard a should be after the 'new' router,
              because otherwise the 'new' will be interpreted as id...
        */}
        <Switch>
          <Route path="/posts/new" component={PostNew} />
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/"  component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
