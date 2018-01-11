import React, { Component } from 'react';
// import github from '../../utils/github';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
        value: 'Scala',
        profile: props.profile || null,
        location: props.location || null,
        username: props.username || null
      };

    let state = this.state;
    // let label;
    
    if (state.profile) {
      state.value =  'Scala';
      state.label = 'Profile'
    }
    if (state.location) {
      state.value =  'Mexico';
      state.label = 'Location'
    }
    if (state.username) {
      state.value =  'lordzero';
      state.label = 'Username'
    }
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };    

  render() {
    return (
      <div className="search">
        <p>{this.state.label}:<input type="text"
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