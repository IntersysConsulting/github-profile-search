import React, { Component } from 'react';
import Search from '../search/search'
import Logo from '../logo/logo'
import { connect } from 'react-redux';
import { getUser } from '../../redux/modules/github'


class NavBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: null,
            location: null,
            username: null
        }
    }

    onFieldChangeHandler(type, value) {
        this.setState({ [type]: value === '' ? null : value }, () => {
            this.props.dispatchGetUserAction(this.state.username, this.state.location, this.state.profile)
        })
    }

    render() {
        return (
            <div className="navbar">
                <Logo />
                <Search fieldType="profile" onChange={this.props.dispatchGetUserAction} />
                <Search fieldType="location" onChange={this.props.dispatchGetUserAction} />
                <Search fieldType="username" onChange={this.props.dispatchGetUserAction} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return { dispatchGetUserAction: (a, b) => dispatch(getUser(a, b)) }
}

export default connect(null, mapDispatchToProps)(NavBar)
