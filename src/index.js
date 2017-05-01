import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/App';
import './content/css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// First way to use popup is to attach to html node once during bootstrap
// other way is to render in any component throughout app
/*ReactDOM.render(
    <Provider store={store}>
        <Popup />
    </Provider>,
    document.getElementById('popup')
);*/
