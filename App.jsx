import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Calculator from './components/calculator';
import store from './store';
import TodoApp from "./TodoApp/TodoApp"
class App extends Component {
  constructor(props) {
    super(props);
  
    
  }

  render() {
  	
    return <div><Calculator/></div>;


  }
}

export default hot(App);
