import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import swal from "sweetalert"
import Cookies from "universal-cookie"

const cookies = new Cookies()

let user_name = ""

class Login extends React.Component {

    constructor() {
        super()
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)

        this.state = {
            email: "",
            password: "",
            redirectToHome: false
        }
    }


    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitHandler(e) {
        e.preventDefault()

        axios.post("/login", { email: this.state.email, password: this.state.password }).then((res) => {
            if (!res.data.isError) {

                console.log("Logged in successfully")
                localStorage.setItem("userData", res.data)
                
                this.setState({
                    redirectToHome: true
                })

                user_name = res.data.data

                this.props.changeLoginState()

            } else {
                swal("something went wrong", "Please check your credentials", "error")
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount(){
        console.log(cookies.get("token"))
        window.scrollTo(0, 0)
    }


    render() {

        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }

        return (
            <div className="container-fluid" style={{ height: "500px" }}>
                <div className="row mx-2 justify-content-center">
                    <div className="col-md-4 border px-lg-5 pb-3 mt-5 bg-white">
                        <h5 className="text-center font-weight-bold my-4">SIGN IN TO YOUR ACCOUNT</h5>

                        <form onSubmit={this.submitHandler}>

                            <div className="form-group">
                                <input
                                    onChange={this.onChangeHandler}
                                    name="email"
                                    className="form-control border bg-gray "
                                    style={{ background: "#f1eded", borderRadius: "0" }}
                                    type="email"
                                    spellCheck={false}
                                    placeholder="Enter email address"
                                />
                            </div>

                            <br />

                            <div className="form-group">
                                <input
                                    onChange={this.onChangeHandler}
                                    name="password"
                                    className="form-control border"
                                    style={{ background: "#f1eded", borderRadius: "0" }}
                                    type="password"
                                    placeholder="Enter password" />
                            </div>

                            <br />

                            <button
                                className="btn btn-block py-2 font-weight-bold text-white"
                                style={{ borderRadius: "30px", background: "blueviolet" }}>
                                Submit
                            </button>

                            <br />

                            <h6
                                className="text-center">
                                <Link to="/" style={{ color: "purple" }} >Forgot Password ?</Link>
                            </h6>

                            <h6
                                className="text-center mt-3">Not have an account?
                                <Link to="/sign-up" style={{ color: "purple" }}>Sign-up</Link>
                            </h6>

                        </form>
                    </div>

                </div>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeLoginState: () => dispatch({ type: "changeLoginState", userName : user_name, isLoggedIn : true }
        )
    }
}


export default connect(null, mapDispatchToProps)(Login)