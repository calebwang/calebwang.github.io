import React from "react";
import linkedin from './linkedin.png';
import email from './email.png';
import github from "./github.png";
import "./app.css";

class App extends React.Component {
  render() {
    return <div className="app-root">
      <Header/>
      <Content/>
    </div>;
  }
}

class Header extends React.Component {
  render() {
    return <div className="header-container">
      <div className="header">caleb wang</div>
    </div>;
  }
}

class Content extends React.Component {
  render() {
    return <div className="content">
      <ImageLinks/>
    </div>;
  }
}

class ImageLinks extends React.Component {
  render() {
    const items = [
      <ImageLink
        img={linkedin}
        url="https://www.linkedin.com/in/calebdwang"
        name="LinkedIn"/>,
      <ImageLink
        img={github}
        url="https://www.github.com/calebwang"
        name="GitHub"/>,
      // email, resume, blog
      <ImageLink
        img={email}
        url="mailto:caleb@caleb.wang"
        name="Email"/>
    ]
    return <div className="references">{items}</div>;
  }
}

class ImageLink extends React.Component {
  render() {
    return <div className="reference-container">
      <a className="reference" href={this.props.url}>
        <img src={this.props.img} className="reference-img" alt={this.props.name}/>
      </a>
    </div>;
  }
}


export default App;
