import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Greeting.css';
import axios from 'axios';

export default class Greeting extends Component {

  constructor() {
      super()
      this.state = {
        input: '',
        result: ''
      }
      this.greeting = this.greeting.bind(this)
      this.setInput = this.setInput.bind(this)
    }
      
    greeting () {
      axios.get('http://java.waleedrehman.co.uk/java-web-service/greeting', {
        params: {name: this.state.input}
      }).then(responce => this.setState({result: responce.data.content}))
    }
    
    setInput (e) {
      this.setState({input: e.target.value})
    }

  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>Greeting</h3>
            <p>This page will be used to call the java-web-service endpoint for greeting, Brief discription explaining greeting solution below:</p>
            <p>to do - explain greeting</p>
            <p><input onChange={this.setInput}></input><button onClick={this.greeting}>Greeting</button></p>
            <p>{this.state.result}</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
