import React, { Component } from 'react'
import Search from '../search/search'
import Logo from '../logo/logo'
import { connect } from 'react-redux'
import { Button, Card, Row, Col } from 'react-materialize';
import { clearStore, getUser, updateSearchValues } from '../../redux/modules/github'


class NavBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: null,
            location: null,
            username: null
        }
    }

    onFieldChangeHandler = (type, value) => {
        console.log(type, value)

        switch (type) {
            case 'profile':
                this.setState({ profile: value })

                break
            case 'location':
                this.setState({ location: value })

                break
            case 'username':
                this.setState({ username: value }   )

                break
        
            default:
                return
            }
    }

    onClickHandler = () => {
        if (this.state.username || this.state.location || this.state.profile) {
            this.props.dispatchCleanStoreAction()
            this.props.dispatchUpdateSearchValuesAction(this.state.username, this.state.location, this.state.profile)
            this.props.dispatchGetUserAction(this.state.username, this.state.location, this.state.profile, 1)
        }

    }

    render() {
        return (
            <nav className="nav-extended blue lighten-1">
                <div className="nav-wrapper blue lighten-1">
                    <Logo />
                </div>
                <div class="nav-content">
                    <ul class="tabs tabs-transparent">
                        <li class="tab"><Search fieldType="profile" onChange={this.onFieldChangeHandler} /></li>
                        <li class="tab"><Search fieldType="location" onChange={this.onFieldChangeHandler} /></li>
                        <li class="tab"><Search fieldType="username" onChange={this.onFieldChangeHandler} /></li>
                        <li class="tab"><Button waves="light" onClick={this.onClickHandler}>Search</Button></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchGetUserAction: (a, b, c, d) => dispatch(getUser(a, b, c, d)),
        dispatchCleanStoreAction: () => dispatch(clearStore()),
        dispatchUpdateSearchValuesAction: (a, b, c) => dispatch(updateSearchValues(a, b, c))
    }
}

export default connect(null, mapDispatchToProps)(NavBar)
