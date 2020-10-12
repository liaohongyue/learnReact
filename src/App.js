import React from 'react';

import './App.css';
import RexduxTest from './Component/ReduxTest';
import {Provider} from 'react-redux';
import store from './store'
import RouteSample from './Component/RouteSample';


function App() {
  return (
    <div>
      <Provider store={store} >
        <RouteSample></RouteSample>
      <RexduxTest></RexduxTest>
      </Provider>
    </div>
  );
}

export default App;
