import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './Permutation.css';
import axios from 'axios';
import Highlight from './Highlight';

export default class Permutation extends Component {

  constructor() {
    super()
    this.state = {
      result: ''
    }
    this.permute = this.permute.bind(this)
  }

  permute (e) {
    e.preventDefault();
    console.log("what is: " + e.target.input.value)
    axios.get('http://java.waleedrehman.co.uk/java-web-service/permutation', {
      params: {permuteInt: e.target.input.value}
    }).then(responce => this.setState({result: responce.data.content}))
  }
  
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>Permutation</h3>
            <p>This page will be used to call the java-web-service endpoint for permutation, Brief discription explaining permutation problem and how I solved it below:</p>
            <p>The problem presented is given any string with 2 or more digits we should be able to extract all the given digits and generate the list of possible numbers these digits can be used to create in a discending order.</p>
            <p>For example, given the input of "236" the solution should return "632, 623, 362, 326, 263,  236"</p>
            <p>If the input provided is: “A 3B2 C6D”, then your solution should return "632,623,362,326,263,236" as well, but this time notice that the provided string had non-integers characters  and whitespaces, so an extraction of integers was first made to obtain the correct solution</p>
            <p>The permutation solution has a model and a controller, model or the PermutationDTO class  code is as follows:</p>
            <Highlight language="java">
            {`
package uk.co.waleed.Permutation.Model;
    
public class PermutationDTO {

    private final long id;
    private final String result;

    public PermutationDTO(long id, String result) {
        this.id = id;
        this.result = result;
    }
  
    public long getId() {
        return id;
    }
  
    public String getContent() {
        return result;
    }
}
            `}
            </Highlight>
            
            <p>Try it for yourself bellow:</p>
            <form onSubmit={this.permute}>
              <input name="input"></input><button>Permute</button>
            </form>
            <p>{this.state.result}</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
