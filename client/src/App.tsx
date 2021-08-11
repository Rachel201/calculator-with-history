import React from 'react';
import './App.scss';
import Form from './Form/Form';
import store from './redux/store';
import { Provider } from 'react-redux';
import ListHistory from './listHistory/ListHistory';


function App() {
  return (
    // <div className="grid-container">
    <Provider store={store}> 
      <Form/>
      <ListHistory/>
    </Provider>
  );
}

export default App;
