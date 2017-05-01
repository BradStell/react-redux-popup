import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

/*ReactDOM.render(
    <Provider store={store}>
        <Popup />
    </Provider>,
    document.getElementById('popup')
);*/
