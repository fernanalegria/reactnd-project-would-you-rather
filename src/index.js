import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './app/state/store';
import App from './app/views/App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const reduxStore = configureStore();

const RootHtml = () => (
  <Provider store={reduxStore}>
    <App />
  </Provider>
);

export const rootUrl = '/reactnd-project-would-you-rather-starter';

ReactDOM.render(<RootHtml />, document.getElementById('root'));
