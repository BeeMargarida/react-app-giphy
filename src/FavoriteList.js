import React, { Component } from 'react';

import './FavoriteList.css';
class FavoriteList extends Component {
  render() {

    let className = "bg-secondary col-sm-3 col-12 show";
    if(!this.props.favBar){
      className = "";
    }

    return (
        <div className={className} id="favorite">

        </div>  
    );
  }
}

export default FavoriteList;
