import React from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import swal from "sweetalert"
import { Redirect } from "react-router"
import { connect } from "react-redux"

class SignUp extends React.Component {
     constructor() {
          super();
          this.state = {
               firstName: "",
               secondName: "",
               email: "",
               college: "",
               course: "",
               admissionYear: "",
               firstPassword: "",
               secondPassword: ""
          }
          this.fillHandler = this.fillHandler.bind(this)
          this.submitHandler = this.submitHandler.bind(this)
     }

     fillHandler(e) {
          this.setState({
               [e.target.name]: e.target.value
          })
     }

     submitHandler(e) {
          e.preventDefault();
          console.log(this.state)
          Axios.post("/sign-up/", this.state, { withCredentials: false }).then((res) => {
               console.log(res)
               if (res.data.isError) {
                    swal("Got some error !", `${res.data.message}`, "error")
               } else {
                    console.log(res.data)
                    this.setState({
                         emailSent: true
                    })
                    swal("We have sent a Four digit pin on your email address. Kindly enter the pin to proceed. ", `${res.data.message}`, "success")
               }
          }).catch((err) => {
               console.log(err);
          })
     }



     render() {
          if (this.state.emailSent) {
               return <Redirect to="/email-pin" />
          }
          return (
               <div className="container-fluid pb-5" style={{ background: `white` }}>
                    <div className="row justify-content-center">
                         <div className="col-xl-4 col-lg-5 col-md-6 col-sm-7 col-10 border px-lg-5 pb-3 mt-5 rounded-lg bg-white">
                              <h5 className="text-center font-weight-bold my-4">WELCOME ! CREATE AN ACCOUNT</h5>
                              <form onSubmit={this.submitHandler}>
                                   <div className="form-group">
                                        <input
                                             className="form-control rounded-0 text-capitalize"
                                             onChange={this.fillHandler}
                                             name="firstName"
                                             type="text"
                                             spellCheck={false}
                                             placeholder="First-name" />
                                   </div>
                                   <br />
                                   <div className="form-group">
                                        <input
                                             className="form-control rounded-0 text-capitalize "
                                             onChange={this.fillHandler}
                                             name="secondName"
                                             type="text"
                                             spellCheck={false}
                                             placeholder="Last-name" />
                                   </div>
                                   <br />
                                   <div className="form-group">
                                        <input
                                             className="form-control rounded-0 "
                                             type="email"
                                             onChange={this.fillHandler}
                                             name="email"
                                             spellCheck={false}
                                             placeholder="Enter email address" />
                                   </div>
                                   <br />
                                   <div className="form-group">
                                        <input
                                             className="form-control rounded-0 "
                                             onChange={this.fillHandler}
                                             type="text"
                                             name="college"
                                             spellCheck={false}
                                             placeholder="College" />
                                   </div>
                                   <br />
                                   <div className="form-group">
                                        <select className="form-control rounded-0" onChange={this.fillHandler} name="course" >
                                             <option>B Tech</option>
                                             <option>MCA</option>
                                             <option>BE</option>
                                             <option>BCA</option>
                                             <option>B.sc IT</option>
                                        </select>
                                   </div>

                                   <br />
                                   <div className="form-group">
                                        <input
                                             className="form-control rounded-0 "
                                             onChange={this.fillHandler}
                                             name="admissionYear"
                                             type="number"
                                             spellCheck={false}
                                             placeholder="Year of Admission" />
                                   </div>
                                   <br />
                                   <div className="form-group">
                                        <input
                                             className="form-control rounded-0 "
                                             onChange={this.fillHandler}
                                             name="firstPassword"
                                             type="password"
                                             placeholder="Create password" />
                                   </div>
                                   <br />
                                   <div className="form-group">
                                        <input
                                             className="form-control rounded-0 "
                                             onChange={this.fillHandler}
                                             name="secondPassword"
                                             type="password"
                                             placeholder="Confirm password" />
                                   </div>
                                   <br />
                                   <div className="form-group">

                                   </div>
                                   <button
                                        className="btn btn-block py-2 font-weight-bold text-white"
                                        type="submit"
                                        style={{ background: "blueviolet" }}>
                                        Submit
                              </button>
                                   <br />
                                   <h6 className="text-center">Already have an account ?
                             <Link style={{ color: "blueviolet" }} to="/login">Log-in</Link>
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
          onChangeLoginState: () => dispatch({ type: "changeLoginState" })
     }
}


export default connect(null, mapDispatchToProps)(SignUp)