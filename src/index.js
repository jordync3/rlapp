import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer.js'
import ReduxThunk from 'redux-thunk'

//redux thunk is middleware

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

ReactDOM.render(
<Provider store = {store}>
    
    <App />

</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
