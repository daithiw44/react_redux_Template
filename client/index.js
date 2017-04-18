import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {Provider, Connect} from 'react-redux';
import configureStore from './store/store';
let initialState = {inputText:"hello app",asyncObj:{}};

const store = configureStore(initialState); 

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
