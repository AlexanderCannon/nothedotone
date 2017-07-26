///3rd party
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Ours
import reducers from './reducers';
import './index.css';
import App from './components/App';
import Work from './components/Work';
import Qualifications from './components/Qualifications';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/projects" component={Work} />
          <Route path="/about" component={Qualifications} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
registerServiceWorker();