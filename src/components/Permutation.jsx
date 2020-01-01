import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './Permutation.css';
import axios from 'axios';

export default class Permutation extends Component {

  constructor() {
    super()
    this.state = {
      input: '',
      result: ''
    }
    this.permute = this.permute.bind(this)
    this.setInput = this.setInput.bind(this)
  }

  permute () {
    axios.get('http://java.waleedrehman.co.uk/java-web-service/permutation', {
      params: {permuteInt: this.state.input}
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
            <h3>Permutation</h3>
            <p>This page will be used to call the java-web-service endpoint for permutation, Brief discription explaining permutation problem and how I solved it below:</p>
            <p>to do - explain permutation</p>
            <p><input onChange={this.setInput}></input><button onClick={this.permute}>Permute</button></p>
            <p>{this.state.result}</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
