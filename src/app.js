import React from 'react';
import linkedin from './linkedin.png';
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import github from "./github.png";
import './app.css';

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
    return <div className="header">caleb wang</div>;
  }
}

class Content extends React.Component {
  render() {
    return <div className="content"><References/></div>
  }
}

class References extends React.Component {
  render() {
    const items = [
      <Reference
          img={facebook}
          name="Facebook"
          url="https://www.facebook.com/calebwang"/>,
      <Reference
          img={linkedin}
          url="https://www.linkedin.com/in/calebdwang"
          name="LinkedIn"/>,
      <Reference
          img={instagram}
          url="https://www.instagram.com/calebdwang"
          name="Instagram"/>,
      <Reference
          img={twitter}
          url="https://www.twitter.com/calebdwang"
          name="Twitter"/>,
      <Reference
          img={github}
          url="https://www.github.com/calebwang"
          name="GitHub"/>
      // email, resume, blog
    ]
    return <div className="references">{items}</div>;
  }
}

class Reference extends React.Component {
  render() {
    return <a className="reference" href={this.props.url}>
      <img src={this.props.img} className="reference-img" alt={this.props.name}/>
    </a>;
  }
}


export default App;
