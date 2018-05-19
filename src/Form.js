import React, { Component } from 'react';

class Form extends Component {
    
    constructor(props) {
        super(props);

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.submitInputParent = this.submitInputParent.bind(this);

        this.state = {
            inputText: ''
        }
    }

    handleChangeInput(event) {
        this.setState({
          inputText: event.target.value
        });
    }

    submitInputParent(event) {
        event.preventDefault();

        this.props.submitInput(this.state.inputText);

        this.setState({
            inputText: ''
        });
    }
    
    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.submitInputParent}>
                
                    <input className="form-control mr-sm-2" type="search"
                    name="search" placeholder="Search" aria-label="Search"
                    value={this.state.inputText}
                    onChange={this.handleChangeInput}/>
                    
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                    type="submit">Search</button>
                </form>
            </div>  
        );
    }
}

export default Form;
