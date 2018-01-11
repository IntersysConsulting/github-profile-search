import React, { Component } from 'react';
import Search from '../search/search'
import Logo from '../logo/logo'

class NavBar extends Component {
//   constructor(props) {
//     super(props);

// //     this.state = {
// //       value: 'Scala',
// //     };
// //   }

// //   handleChange = (event) => {
// //     this.setState({
// //       value: event.target.value,
// //     });
    
//   };    
  render() {
    return (
      <div className="navbar">
        <Logo />
        <Search profile/>
        <Search location/>
        <Search username/>
      </div>
    );
  }
}

export default NavBar;