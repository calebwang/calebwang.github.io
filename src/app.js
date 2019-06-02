import React from "react";
import ReactDOM from "react-dom";
import linkedin from './linkedin.png';
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import github from "./github.png";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
    this.state = {
      contentOffset: 0
    };
  }

  resize() {
    this.setState({
      contentOffset: this.contentRef.current.contentOffset()
    });
  }

  componentDidMount() {
    this.resize();
  }

  render() {
    return <div className="app-root">
      <Header offset={this.state.contentOffset} />
      <Content ref={this.contentRef} />
    </div>;
  }
}

class Header extends React.Component {
  render() {
    const style = {
      "padding-left": this.props.offset
    };
    return <div className="header-container">
      <div className="header" style={style}>caleb wang</div>
    </div>;
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.referencesRef = React.createRef();
  }

  contentOffset() {
    return this.referencesRef.current.contentOffset();
  }

  render() {
    return <div className="content">
      <ImageLinks ref={this.referencesRef}/>
    </div>;
  }
}

class ImageLinks extends React.Component {
  constructor(props) {
    super(props);
    this.firstImageLinkRef = React.createRef();
  }

  contentOffset() {
    const myNode = ReactDOM.findDOMNode(this);     
    const firstImageLink = this.firstImageLinkRef.current;
    return firstImageLink.offsetLeft() - myNode.offsetLeft;
  }

  render() {
    const items = [
      <ImageLink
        img={facebook}
        name="Facebook"
        ref={this.firstImageLinkRef}
        url="https://www.facebook.com/calebwang"/>,
      <ImageLink
        img={linkedin}
        url="https://www.linkedin.com/in/calebdwang"
        name="LinkedIn"/>,
      <ImageLink
        img={instagram}
        url="https://www.instagram.com/calebdwang"
        name="Instagram"/>,
      <ImageLink
        img={twitter}
        url="https://www.twitter.com/calebdwang"
        name="Twitter"/>,
      <ImageLink
        img={github}
        url="https://www.github.com/calebwang"
        name="GitHub"/>
      // email, resume, blog
    ]
    return <div className="references">{items}</div>;
  }
}

class ImageLink extends React.Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
  }

  offsetLeft() {
    return this.domRef.current.offsetLeft;
  }
  
  render() {
    return <div className="reference-container">
      <a className="reference" href={this.props.url} ref={this.domRef}>
        <img src={this.props.img} className="reference-img" alt={this.props.name}/>
      </a>
    </div>;
  }
}


export default App;
