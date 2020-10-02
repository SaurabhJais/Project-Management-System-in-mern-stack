import React from "react"
import { Link  } from "react-router-dom"

export default class SectionNine extends React.Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="row pt-4">
                    <div className="col-md-4">
                        <h2 className="text-white text-center font-weight-bold">Important</h2>
                        <ul className="list-unstyled text-center mt-4">
                            <li><Link to="/contact-us" className="text-white text-decoration-none">Contact Us</Link></li>
                            <li><Link to="/about-me" className="text-white text-decoration-none">About</Link></li>
                            <li><a  className="text-white text-decoration-none" href="/">Disclaimer</a></li>
                            <li><a  className="text-white text-decoration-none" href="/">Privacy</a></li>
                            <li><a  className="text-white text-decoration-none" href="/">Terms & conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2 className="text-white text-center font-weight-bold">More</h2>
                        <ul className="list-unstyled text-center mt-4">
                            <li><a  className="text-white text-decoration-none" href="/">Investors</a></li>
                            <li><a  className="text-white text-decoration-none" href="/">Our Team</a></li>
                            <li><a  className="text-white text-decoration-none" href="/">Career</a></li>
                            <li><a  className="text-white text-decoration-none" href="/">Future Vision</a></li>
                            <li><a  className="text-white text-decoration-none" href="/">Mission</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2 className="text-center text-white text-center font-weight-bold">Address</h2>
                        <h5 className="text-center text-white mt-4">Ewing christian college</h5>
                        <p className="text-center text-white"> Lowther Rd, near by Canara Bank, Gaughat, Mutthi Ganj, Prayagraj, Uttar Pradesh 211003</p>
                    </div>
                </div>
                <div className="row">
                    <h6 className="text-white  text-center">Developed with 💓 by <span className="font-weight-bolder">Saurabh Jaiswal </span>.</h6>
                </div>
            </div>
        )
    }
}