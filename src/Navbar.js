import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand text-white">Tiny Giphy</a>
                    </div>
                    <div className="navbar-right">
                        <a className="btn btn-warning text-white" id="favorite_btn" 
                            onClick={this.props.changeStateTab}>
                            <i className="fas fa-star"></i> 
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
    
}

export default Navbar;
