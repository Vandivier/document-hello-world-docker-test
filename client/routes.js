/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

let containers = './containers/';                      //TODO: get it from props.store.CONSTS.containers
//import store from './store';

// Import Page Containers
let HomePage = require(containers + 'HomePage/HomePage');

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require(containers + 'Post/pages/PostListPage/PostListPage');
  require(containers + 'Post/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={HomePage}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require(containers + 'Post/pages/PostListPage/PostListPage').default);
        });
      }}
    />
    <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require(containers + 'Post/pages/PostDetailPage/PostDetailPage').default);
        });
      }}
    />
  </Route>
);
