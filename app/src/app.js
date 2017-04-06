import React from 'react';
import './app.css';

class App extends React.Component {
  render() {
    return <div className="app-root">
        <Header/>
        <Menu/>
    </div>;
  }
}

class Header extends React.Component {
  render() {
    return <div className="header">Caleb Wang</div>;
  }
}

class Links extends React.Component {
  render() {
    const menuItems = [
      <div className="menuItem">foo</div>,
      <div className="menuItem">bar</div>
    ]
    return <div className="links">{menuItems}</div>;
  }
}

class Link extends React.Component {
  render() {
    <a href={this.props.url}>
      <img src={this.props.img}>
    </a>
  }
}


export default App;
