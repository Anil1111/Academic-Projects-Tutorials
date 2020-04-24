import React from 'react';
import RedPanda from './JS/panda';
import TonightsPlan from './JS/tonightsPlan';
import Button from './JS/button';
import MyName from './JS/myName';
import Contact from './JS/auth';
import {MainApp} from './JS/passProps/mainapp';
import CommProps from './JS/commProps/mainapp';
import {Talker} from './JS/eventProps/talker';
import {Mood} from './JS/setState/mood';
import {Toggle} from './JS/setState/toggle';
import {Random} from './JS/PickColor/Random';
import {Parent} from './JS/passState/parent';
import {ParentII} from './JS/passStateII/parent';
import {ParentIII} from './JS/passStateIII/parent';
import {Player} from './JS/videoPlayer/player';
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
      <CommProps /><hr />
      <Talker />< hr/>
      <Mood /><hr />
      <Toggle /><hr/>
      <Random /> <hr />
      <Parent /><hr />
      <ParentII /> <hr />
      <ParentIII /> <hr />     
      <Player /><hr /> 
    </div>
  )
};



export default App;
