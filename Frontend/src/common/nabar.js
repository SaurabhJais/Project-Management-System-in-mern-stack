import React from "react"
import "../index.css"
import "aos/dist/aos.css";
import Cookie from "universal-cookie"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const cookies = new Cookie()

class NavBar extends React.Component {

    logoutClicked(){
        cookies.remove("token")
        window.location.href = "/"
    }


    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white border-bottom">
                    <div className="container">
                        <Link className="text-dark navbar-brand font-weight-bold" to="/">PROJECTO</Link>
                        <button className="navbar-toggler border-0 " data-toggle="collapse" data-target="#collapseIt" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="collapseIt">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 pl-md-4 text-center font-weight-normal">
                                <li className="nav-item"><a href="/" className=" pl-md-4 nav-link">First</a></li>
                                <li className="nav-item"><a href="/" className=" pl-md-4 nav-link">Second</a></li>
                                <li className="nav-item"><a href="/" className=" pl-md-4 nav-link">Second</a></li>
                                <li className="nav-item"><a href="/" className=" pl-md-4 nav-link">Third</a></li>
                                <li className="nav-item dropdown pl-md-4">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                    <ul className="dropdown-menu border-0  shadow">
                                        <li><a className="dropdown-item text-md-center" href="/">Hello</a></li>
                                        <li><a className="dropdown-item text-md-center" href="/">Hello</a></li>
                                        <li><a className="dropdown-item text-md-center" href="/">Hello</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <a className="nav-item" href="/"><button className="btn font-weight-normal text-white font-weight-bold mr-3" style={{ background: "blueviolet", letterSpacing: "2px" }} >Hire Me</button></a>
                            {
                                this.props.isLoggedIn ? <a className="nav-item" onClick={this.logoutClicked}>
                                    <button className="btn font-weight-normal text-white font-weight-bold ml-3" style={{ background: "blueviolet", letterSpacing: "2px" }} >Logout</button>
                                </a> : null
                            }
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, null)(NavBar)