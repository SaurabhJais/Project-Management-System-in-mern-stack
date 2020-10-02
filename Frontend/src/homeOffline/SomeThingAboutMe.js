import React from "react"
import { Link } from "react-router-dom"
import * as me from "../assets/me.jpg"

export default class SectionEight extends React.Component {
    render() {
        return (
            <div className="container-fluid mt-5" style={{background: "blueviolet"}} >
                <div className="row py-3">
                    <div  data-aos="fade-up" className="col-md-4 d-flex justify-content-center">
                        <img src={me} alt="something alt" className="img-fluid" style={{ height: "200px", width: "auto", clipPath: " polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}></img>
                    </div>
                    <div className="col-md-2"></div>
                    <div data-aos="fade-up"  className="col-md-6 pt-4 ">
                        <h1 className="text-white text-center ">Who created this ? <span role='img' aria-labelledby="xyz"  >🤔</span></h1>
                        <h3 className="text-white text-center font-weight-light ">Its me <span className="font-weight-bolder"> "Saurabh Jaiswal"</span> <span aria-labelledby="xyz" role="img">🥰</span></h3>
                        <h6 className="text-white text-center  font-weight-light">Looks like your are interested to work with Me. See</h6>
                        <div className="d-flex justify-content-center">
                            <Link to="/about-me">
                                <button className="btn btn-danger mt-3 px-5 font-weight-bold" style={{ clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)" }}>About Me</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}