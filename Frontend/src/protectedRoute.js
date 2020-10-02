import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

class ProtectedRoute extends React.Component {
    render() {
        if (this.props.isLoggedIn) {
            return (
                <Route component = {this.props.component} path={this.props.path} />
           )
        } else {
            return <Redirect to="/" />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, null)(ProtectedRoute)
