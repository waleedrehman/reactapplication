import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import './Greeting.css';
import axios from 'axios';
import Highlight from './Highlight';

export default class Greeting extends Component {

  constructor() {
      super()
      this.state = {
        result: ''
      }
      this.greeting = this.greeting.bind(this)
    }
      
    greeting (e) {
      e.preventDefault();
      axios.get('http://java.waleedrehman.co.uk/java-web-service/greeting', {
        params: {name: e.target.input.value}
      }).then(responce => this.setState({result: responce.data.content}))
    }

  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>Greeting</h3>
            <p>This page will be used to call the java-web-service endpoint for greeting, Brief discription explaining greeting solution below:</p>
            <p>The greeting web service is usually used as an example web service, this is derived from the spring-boot example web service application. 
              The web service acts like a hello world application. It looks for a parameter passed in, if the parameter is passed in it says hello to the name which was passed in.
              If a parameter isn't passed in it just says hello world. The Model is as follows:</p>
              <Highlight language='java'>
              {`
package uk.co.waleed.Greeting.Model;

public class GreetingDTO {

    private final long id;
    private final String content;

    public GreetingDTO(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
            `}
              </Highlight>
              <p>The controller is as follows:</p>
              <Highlight language='java'>
              {`
package uk.co.waleed.Greeting.Controller;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uk.co.waleed.Greeting.Model.GreetingDTO;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @CrossOrigin(origins = "*")
    @RequestMapping("/greeting")
    public GreetingDTO greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new GreetingDTO(counter.incrementAndGet(),
                            String.format(template, name));
    }
}
            `}
              </Highlight>
              <p>Try for yourself bellow:</p>
            <form onSubmit={this.greeting}>
              <input name="input"></input><button>Greeting</button>
            </form>
            <p>{this.state.result}</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
