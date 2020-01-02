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
            <p>The problem presented is given any string with 2 or more digits we should be able to extract all the given digits and generate the list of possible numbers these digits can be used to create in a discending order.</p>
            <p>For example, given the input of "236" the solution should return "632, 623, 362, 326, 263, 236"</p>
            <p>If the input provided is: “A 3B2 C6D”, then your solution should return "632,623,362,326,263,236" as well, but this time notice that the provided string had non-integers characters and whitespaces, so an extraction of integers was first made to obtain the correct solution</p>
            <code>Example Java code to follow</code>
            <p><input onChange={this.setInput}></input><button onClick={this.permute}>Permute</button></p>
            <p>{this.state.result}</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
