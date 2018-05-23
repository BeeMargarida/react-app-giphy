import React, { Component } from 'react';

import Navbar from './Navbar';
import AppBody from './AppBody';
import './App.css';
import './bootstrap.min.css';
import './fontawesome-free-5.0.13/web-fonts-with-css/css/fontawesome-all.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      openFavorites: false
    };

    this.changeStateTab = this.changeStateTab.bind(this);
  }

  changeStateTab() {
    this.setState(prevState => ({
      openFavorites: !prevState.openFavorites
    }));
  }

  render() {
    return (
      <div id="app-body">
        <Navbar changeStateTab={this.changeStateTab}/>
        <AppBody favBar={this.state.openFavorites} />
      </div>
    );
  }
}

export default App;
