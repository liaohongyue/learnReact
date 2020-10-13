import React from 'react';

import './App.css';
import AntdTest from './Component/AntdTest';
import CommentList from './Component/CommentList';
import WelcomeDialog from './Component/Composition';
import ContextTest from './Component/ContextTest';
import Hoc from './Component/Hoc';
import HookTest from './Component/HookTest';
import RexduxTest from './Component/ReduxTest';
import {Provider} from 'react-redux';
import store from './store'
import RouteSample from './Component/RouteSample';

function App() {
  return (
    <div className="">
            <Provider store={store} >
        <RouteSample></RouteSample>
      <RexduxTest></RexduxTest>
      </Provider>
      <ContextTest></ContextTest>
      <HookTest></HookTest>
      <WelcomeDialog></WelcomeDialog>
      test
      <AntdTest></AntdTest>
      <CommentList></CommentList>
      <Hoc></Hoc>
    </div>
  );
}

export default App;
