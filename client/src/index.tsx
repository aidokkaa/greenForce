import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {persistor} from './redux/store';
import {store} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <PersistGate persistor={persistor} loading={null}>
     <Provider store = {store}>
    <App />
    </Provider>
   </PersistGate>

);

