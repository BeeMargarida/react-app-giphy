import React, { Component } from 'react';

import GifList from './GifList';
import FavoriteList from './FavoriteList';

import './AppBody.css';

class AppBody extends Component {

    constructor(props) {
        super(props);

        let localSt = JSON.parse(localStorage.getItem('favorites'));

        if(localSt == null){

            this.state = {
                favoriteGifs: []
            }
        }
        else {

            this.state = {
                favoriteGifs: [...localSt]
            }
        }


        this.addFavorite = this.addFavorite.bind(this);
        this.deleteFavorite = this.deleteFavorite.bind(this);
        this.triggerAnimationNewFavorite = this.triggerAnimationNewFavorite.bind(this);
        this.hasIndexOfId = this.hasIndexOfId.bind(this);
    }

    hasIndexOfId(id) {
        for (var i = 0; i < this.state.favoriteGifs.length; i++)
            if (this.state.favoriteGifs[i].id === id)
                return true;
        return false;
    }

    addFavorite(event, gifInfo) {
        event.preventDefault();

        if(!this.hasIndexOfId(gifInfo.id)){
            this.setState({
                favoriteGifs: [...this.state.favoriteGifs, gifInfo]
            }, () => {
                localStorage.setItem('favorites', JSON.stringify(this.state.favoriteGifs));
            });
        }

        this.triggerAnimationNewFavorite();
    }

    triggerAnimationNewFavorite() {
        let favoriteButton = document.querySelector("#favorite_btn");

        favoriteButton.classList.remove("animation_jiggle");
        
        void favoriteButton.offsetWidth;
        favoriteButton.classList.add("animation_jiggle");
    }

    deleteFavorite(event, gifInfo) {
        event.preventDefault();

        let array = [...this.state.favoriteGifs];
        let index = array.indexOf(gifInfo);
        array.splice(index,1);

        this.setState({
            favoriteGifs: array
        }, () => {
            localStorage.setItem('favorites', JSON.stringify(this.state.favoriteGifs));
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="app-content">

                    <GifList favBar={this.props.favBar}
                        handlerFavorites={this.addFavorite}/>

                    <FavoriteList favBar={this.props.favBar}
                        favGifs={this.state.favoriteGifs}
                        handlerDeleteFavorite={this.deleteFavorite}/>

                </div>
            </div>  
        );
    }
}

export default AppBody;
