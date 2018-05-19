import React, { Component } from 'react';

import GifList from './GifList';
import FavoriteList from './FavoriteList';

import './AppBody.css';

class AppBody extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row" id="app-content">
                <GifList favBar={this.props.favBar}/>
                <FavoriteList favBar={this.props.favBar}/>
            </div>
        </div>  
    );
  }
}

export default AppBody;
