import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap"
import AOS from "aos"
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container"
import BR from "./lineBreak"
import Navbar from "./common/nabar"
import Footer from "./common/footer"
import HomePage from "./homeOffline/homePage"
import AboutMe from "./aboutMe/aboutMe"
import ContactUs from "./contactUs/contactUs"
import Login from "./auth/login"
import SignUp from "./auth/signUp"
import Forgot from "./auth/forgot"
import Dashboard from "./dashboard/dashboard"
import emailPin from "./auth/emailPin"
import { Switch, Route } from "react-router-dom"
import { connect } from "react-redux"
import decode from "jwt-decode"
import Cookies from "universal-cookie"
import ProtectedRoute from "./protectedRoute"
import Error_404 from "./404-error"
import axios from "axios"

let cookies = new Cookies()

class App extends React.Component {


  componentDidMount() {

    AOS.init({
      duration: 1000
    })

    let decoded_token_cookie = cookies.get("token")

    if (decoded_token_cookie) {

      let decoded_token = decode(decoded_token_cookie)

      if (decoded_token.exp < (Date.now() / 1000)) {

        this.props.changeLoginStateTo_Logout()
        //    window.location.href = "/"
        console.log("Token is expired......")

      } else {
        axios.post("/login", { email: decoded_token.email, password: decoded_token.password }).then((isMatched) => {
          if (!isMatched) {
            console.log("Token Error")
          } else {
            this.props.changeLoginState()
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    } else {
      this.props.changeLoginStateTo_Logout()
    }
  }

  render() {
    return (
      <Container style={{ padding: "0", boxSizing: "border-box", height: "600px" }} fluid>
        <Navbar />
        <div style={{ height: "56px" }}></div>
        <BR color="rgb(229 238 239)" />

        <Switch>
          {
            this.props.isLoggedIn ? <Route path="/" component={Dashboard} /> : <Route path="/" exact component={HomePage} />
          }
          <Route path="/login" component={Login} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/sign-up" component={SignUp} />
          <ProtectedRoute path="/email-pin" component={emailPin} />
          <Route path="/forgot" component={Forgot} />
          <Route component={Error_404} />
        </Switch>

        <Footer />
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    userName: state.userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLoginState: () => dispatch({ type: "changeLoginState" }),
    changeLoginStateTo_Logout: () => dispatch({ type: "changeLoginStateTo_Logout" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)