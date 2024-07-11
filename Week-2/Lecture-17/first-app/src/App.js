import logo from './logo.svg';
import './App.css';

import {Component} from "react"
class App extends Component{
  name="Cipher School"
  render(){
    return(
      <div>
        <h1>This is {this.name}</h1>
      </div>
    )
  }
}

export default App;