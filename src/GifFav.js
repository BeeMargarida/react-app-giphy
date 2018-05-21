import React, {Component} from 'react';

import './Gif.css';

class GifFav extends Component {

    render() {

        let src = this.props.gifInfo.images["fixed_width"].url;

        return(

            <div className="col-12 image" id="fav">

                <img src={src} alt={this.props.gifInfo.title}/>

                <a className="btn btn-danger text-white" 
                    onClick={(e) => this.props.handlerDeleteFavorite(e,this.props.gifInfo)}> 
                    <i className="fas fa-trash"></i> 
                </a>

            </div>

        );

    }
}

export default GifFav;