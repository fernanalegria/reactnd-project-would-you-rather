import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/views/App';
import configureStore from './app/state/store';
import { Provider } from 'react-redux';

const reduxStore = configureStore();

const RootHtml = () => (
    <Provider store={reduxStore}>
      <App />
    </Provider>
  );

ReactDOM.render(<RootHtml />, document.getElementById('root'));
