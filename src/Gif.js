import React, { Component } from 'react';

import './Gif.css';

class Gif extends Component {

    render() {

        let src = this.props.gifInfo.images["fixed_width"].url;

        return(

            // <div className="image col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="column image">
                <img src={src} alt={this.props.gifInfo.title}/>

                <a className="btn btn-info text-white add-favorite" > 
                    <i className="fas fa-star"></i> 
                </a>
            </div>

        );

    }

}

export default Gif;