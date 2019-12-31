import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends Component {

  constructor() {
    super()
    this.state = {
      result: '',
      input: ''
    }

    this.permute = this.permute.bind(this)
    this.greeting = this.greeting.bind(this)
    this.setInput = this.setInput.bind(this)
  }

  permute () {
    axios.get('http://java.waleedrehman.co.uk/java-web-service/permutation?permuteInt=' + this.state.input)
    .then(responce => this.setState({result: responce.data.content}))
  }

  greeting () {
    axios.get('http://java.waleedrehman.co.uk/java-web-service/greeting?name=' + this.state.input)
    .then(responce => this.setState({result: responce.data.content}))
  }

  setInput (e) {
    this.setState({input: e.target.value})
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p><input onChange={this.setInput}></input><button onClick={this.permute}>Permute</button><button onClick={this.greeting}>Greeting</button></p>
          <p>{this.state.result}</p>
        </header>
      </div>
    );
  }
  
}

export default App;
