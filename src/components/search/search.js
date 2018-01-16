import React, { Component } from 'react';
// import github from '../../utils/github';

class Search extends Component {
  constructor(props) {
    super(props)
    let state = {}
    
    switch (props.fieldType) {
      case 'profile':
        state.value =  'Scala'
        state.label = 'Profile'
        break

      case 'location':
        state.value =  'Mexico'
        state.label = 'Location'
        break

      case 'username':
      default:
        state.value =  'lordzero'
        state.label = 'Username'
        break;
    }

    this.state = state
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.fieldType, event.target.value)
    }
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