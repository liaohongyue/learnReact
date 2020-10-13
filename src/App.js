import React from 'react';
import './App.css';
import AntdTest from './Component/AntdTest';
import CommentList from './Component/CommentList';
import WelcomeDialog from './Component/Composition';
import ContextTest from './Component/ContextTest';
import Hoc from './Component/Hoc';
import HookTest from './Component/HookTest';

function App() {
  return (
    <div className="">
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
