import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import { Route, BrowserRouter, Switch } from  'react-router-dom'
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PostList from './containers/posts/PostList';
import PostNew from './containers/posts/PostNew'
import PostDetail from './containers/posts/PostDetail'
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'




const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <MuiThemeProvider>
        <div className="main-content">
          <Switch>
            <Route path="/posts/new" component={PostNew} />
            <Route path="/posts/:id" component={PostDetail} />
            <Route path="/" component={PostList} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
