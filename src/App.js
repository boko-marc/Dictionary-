import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Dictionary from './component/dictionnaire';
import { Component } from 'react';
class App extends Component {
  render()
  {
    return <Dictionary/>
  }
}

export default App;
