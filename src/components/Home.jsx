import React, { Component } from 'react'
import { Jumbotron, Grid} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to React Website</h2>
          <p>This website is builtupon React, React-Router, Axios & React-Bootstrap</p>
          <p>I will be using this website as a front-end for the java-web-service; each end point will have its own page so I can explain the java code from the web service and also demonstrate the call by using axios calls to the backend services.</p>
        </Jumbotron>
      </Grid>
    )
  }
}
