import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
function App() {
  return (
    <div className="App">
      <Greet name="Gauransh" heroname="PicoGrafix" />
      <Message name="ignorance" addValue="3"/>
      <Counter  />
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
    </div>
  );
}

export default App;
