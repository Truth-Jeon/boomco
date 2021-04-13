import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import configure from 'store/configure';

import AppSet from './App/App';

const store = configure();

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./boomco_supporter');
}

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <AppSet />
                </Router>
            </Provider>
        );
    }
}

export default App;
