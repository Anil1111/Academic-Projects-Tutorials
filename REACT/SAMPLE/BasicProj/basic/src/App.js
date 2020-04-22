import React from 'react';
import RedPanda from './JS/panda';
import TonightsPlan from './JS/tonightsPlan';
import Button from './JS/button';
import MyName from './JS/myName';
import Contact from './JS/auth';
import {MainApp} from './JS/passProps/mainapp'
import './App.css';

function App() {
  return (
    <div className="app">
      <RedPanda/> <hr />
      <TonightsPlan />  <hr />
      <Button /><hr />
      <MyName /><hr />
      <Contact /><hr />
      <MainApp /><hr />
    </div>
  )
};



export default App;
