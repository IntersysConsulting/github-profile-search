import React, { Component } from 'react'
import { connect } from 'react-redux';
import { clearStore, getUser, updateCurrentPage } from '../../redux/modules/github'
import { items_per_page } from '../../config'

class Pagination extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pagination: []
        }
    }

    paginationGenerator = () => {
        const total_pages = Math.ceil(this.props.search.total_count / items_per_page)
        const pagination = []

        for (let i = 0; i < total_pages; i++) {
            if (this.props.page === i + 1) {
                pagination.push((<li class="active"><a href="#!">{i + 1}</a></li>))
            } else {
                pagination.push((<li class="waves-effect"><a href="#!" onClick={() => this.handlePaginationClick(i)}>{i + 1}</a></li>))
            }
        }

        return pagination

    }

    handlePaginationClick = i => {
        this.props.dispatchCleanStoreAction()
        this.props.dispatchUpdateCurrentPageAction(i)
        this.props.dispatchGetUserAction(this.props.search.name, this.props.search.location, this.props.search.language, i)
    }

    render() {
        return (
            <div>
                <ul class="pagination">
                {(1 === this.props.page) ?
                    (<li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>) :
                    (<li class="waves-effect"><a href="#!" onClick={() => this.handlePaginationClick(this.props.page - 2)}><i class="material-icons">chevron_left</i></a></li>)}
                {this.paginationGenerator()}
                {(Math.ceil(this.props.search.total_count === 0 || this.props.search.total_count / items_per_page) === this.props.page) ?
                    (<li class="disabled"><a href="#!"><i class="material-icons">chevron_right</i></a></li>) :
                    (<li class="waves-effect"><a href="#!" onClick={() => this.handlePaginationClick(this.props.page)}><i class="material-icons">chevron_right</i></a></li>)}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchGetUserAction: (a, b, c, d) => dispatch(getUser(a, b, c, d)),
        dispatchCleanStoreAction: () => dispatch(clearStore()),
        dispatchUpdateCurrentPageAction: (a) => dispatch(updateCurrentPage(a))
    }
}

function mapStateToProps({ github }) {
    return { page: github.page, search: github.search }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
