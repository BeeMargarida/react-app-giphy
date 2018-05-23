import React, { Component } from 'react';
import axios from 'axios';

import Form from './Form';
import Gif from './Gif';

import './GifList.css';

class GifList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      submittedInput: '',
    }

    this.submitInput = this.submitInput.bind(this);
  }

  submitInput(inputText) {
    let replacedInputText = inputText.split(' ').join('+');

    let url = "http://api.giphy.com/v1/gifs/search?q=" + replacedInputText 
      +"&api_key=O6vstHngI6QtALgB7WT4EjoYdKXK5XOm&limit=25";

    let self = this;

    axios.get(url)
      .then(function(response) {

        let gifs = response.data.data;

        self.setState({gifs: gifs, submittedInput: inputText});

      })
      .catch(function(error) {
        console.log('Ups! An error ocurred! ' + error);
      });
  }

  render() {

    let className = "gifList col-sm-9 col-12";
    if(!this.props.favBar){
      className = "gifList col-12";
    }

    const gifs = this.state.gifs.map((info, i) => (
      <Gif key={i} gifInfo={info} handlerFavorites={this.props.handlerFavorites}/>
    ));

    let header = "";
    if(this.state.submittedInput !== ''){
      header = (<h4>Search result for <em>{this.state.submittedInput}</em>:</h4>);
    }

    return (

        <div className={className}>
            <Form submitInput={this.submitInput}/>
            
            {header}

            <div id="list">
              {gifs}
            </div>

        </div>  
    );
  }

}

export default GifList;
