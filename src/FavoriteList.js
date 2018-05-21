import React, { Component } from 'react';
import GifFav from './GifFav';
import './FavoriteList.css';

class FavoriteList extends Component {
  render() {

    let className = "bg-secondary col-sm-3 col-12 show";
    if(!this.props.favBar){
      className = "";
    }
    
    const gifs = this.props.favGifs.map((info, i) => (
      <GifFav key={i} gifInfo={info} handlerDeleteFavorite={this.props.handlerDeleteFavorite}/>
    ));

    return (

        <div className={className} id="favorite">
          <div className="row">
            {gifs}
          </div>
        </div>  
    );
  }
}

export default FavoriteList;
