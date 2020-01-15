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
          <h2>About Me</h2>
          <p>FullStack Developer at Barclays working with technologies such as Java, React.js, Jest, Maven/Gradle, JavaScript MVC, JQuery and SASS. I have had previous commercial experience with C#, ASP.net, PL-SQL, Oracle Database, Oracle Apex Builder, SQL, HTML, CSS and JavaScript. I have also been working with database systems such as MySQL and T-SQL and have also been working with tools such as Jenkins, Bladelogic and AWS. I am always active and hungry for knowledge. I am a quick learner and I try to teach myself looking at examples available. I have experience with online tools to create websites such as inWeby, Interspire, Google Sites , BigCartel, Big Commerce and WordPress. I even have my own linux based server on which I am hosting a WordPress website for my client, www.ledhubuk.com. I have experience with SSL Security. In my free time I tend to improve my skills as a developer by going through online tutorials, kata solutions and play around with code/websites on my server.</p>
          <a href="https://www.waleedrehman.co.uk" target="blank">Read More</a>
        </Jumbotron>
      </Grid>
    )
  }
}
