import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Scala',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    
  };    
  render() {
    return (
      <div className="search">
        <p>Profile:<input type="text"
            id="text-field-controlled"
            value={this.state.value}
            onChange={this.handleChange}
        />    
        </p>        
      </div>
    );
  }
}

export default Search;