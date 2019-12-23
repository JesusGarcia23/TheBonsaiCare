import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Browserify} from 'react-router-dom';
import { Provider } from './hookAndContext/context'

ReactDOM.render(
    <Browserify>
    <Provider>
    <App />
    </Provider>
    </Browserify>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
