import React from "react"
import "../index.css"
import axios from "axios"
import Loading from "../loading"
import swal from "sweetalert"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class emailPin extends React.Component {
    constructor() {
        super()
        this.resendEmail = this.resendEmail.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }
    state = {
        showLoading: false,
        enteredPin: "",
        redirectToHome: false
    }

    resendEmail() {
        this.setState({
            showLoading: true
        })
        axios.get("/sign-up/resend-pin").then((result) => {
            if (result) {
                console.log(result)
                this.setState({
                    showLoading: false
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    inputChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler(e) {
        e.preventDefault()
        this.setState({
            showLoading: true
        })
        axios.post("/sign-up/verify-pin", {
            enteredPin: this.state.enteredPin,
            email: sessionStorage.getItem("email")
        })
        .then((res) => {
            this.setState({
                showLoading: false,
            })

            if (!res.data.isError) {
                this.setState({
                    redirectToHome: true
                })
                this.props.onChangeLoginState()
                swal("You are verified user Now", "You can use all functions of the website", "success")
            } else {
                swal("Got some error", res.data.message, "error")
            }

        }).catch((err) => {

            this.setState({
                showLoading: false,
            })

            console.log(err)
        })
    }

    render() {
        if(this.state.redirectToHome){
            return <Redirect to="/" />
        }
        return (
            <>
                {
                    this.state.showLoading ? <Loading /> : null
                }
                <div className="container my-5 py-5 border bg-light">
                    <h5 className="text-center py-5">
                        We have sent a <strong>Four digit</strong> Pin on your registered email address. <br />Kindly enter that PIN to verifty your account
                    </h5>
                    <div className="d-flex justify-content-center">
                        <form onSubmit={this.submitHandler}>
                            <input
                                onChange={this.inputChangeHandler}
                                name="enteredPin"
                                className="form-control rounded-0 mt-5"
                                placeholder="Enter 4 digit PIN" />
                            <br />
                            <button
                                className="btn btn-block text-white font-weight-bold"
                                type="submit"
                                style={{ background: "blueviolet" }}>
                                Submit
                             </button>
                        </form>
                    </div>
                    <p
                        onClick={this.resendEmail}
                        style={{ cursor: "pointer", color: "blueviolet" }}
                        className="text-center py-5 font-weight-bold">
                        Resend Email ?
                    </p>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         onChangeLoginState: () => dispatch({ type: "changeLoginState" })
    }
}


export default connect(null, mapDispatchToProps)(emailPin)