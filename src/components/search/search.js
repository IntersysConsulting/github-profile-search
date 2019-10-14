import React, { Component } from 'react'
// import github from '../../utils/github'

class Search extends Component {
  constructor(props) {
    super(props)
    let state = {}
    
    switch (props.fieldType) {
      case 'profile':
        state.value =  ''
        state.label = 'Profile'
        break

      case 'location':
        state.value =  ''
        state.label = 'Location'
        break

      case 'username':
      default:
        state.value =  ''
        state.label = 'Username'
        break
    }

    this.state = state
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })

    if (typeof this.props.onChange === 'function' && event.target.value.length >= 2) {
      this.props.onChange(this.props.fieldType, event.target.value)
    } 
  }

  render() {
    return (
      <div className="search input-field">
        <label class="label-icon" for={`text-field-controlled-${this.state.label}`}>{ this.state.label }</label>
        <input type="text"
            id="text-field-controlled"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={this.state.label}
        />
        <i class="material-icons prefix">search</i>
      </div>
    )
  }
}

export default Search
