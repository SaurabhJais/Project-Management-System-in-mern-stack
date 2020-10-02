import React from "react"
import { Link } from "react-router-dom"
import * as homeImg from "../assets/homepage.png"


export default class HomeDetails extends React.Component {
    render() {
        return (
            <>
                <div data-aos="fade-up" className="container pt-md-5 mb-md-5 pb-md-5">
                    <div className="row mt-md-5">
                        <div className="col-md-6 order-md-first order-last">
                            <div className="row ">
                                <h1 className="text-center display-1 font-weight-bolder text-md-left" >Welcome to <span style={{color: "blueviolet"}}>Projecto</span></h1>
                                <div className="mt-md-2"></div>
                                <h4 className="text-muted text-center text-md-left" style={{wordSpacing: "5px"}}>Building This with Mern stack (React.js, Node.js, MongoDb, ExpressJs). This project has made just to shine my Portfolio.</h4>
                                <div className="mt-4 justify-content-md-start justify-content-center d-flex">
                                    <Link to="/login"><button className="btn btn-primary mr-4 border-0 font-weight-bolder py-3 px-4" style={{background: "blueviolet"}}>Explore</button></Link>
                                    <Link to="/dashboard"><button className="btn btn-outline-secondary  font-weight-bolder py-3 px-4" style={{}}>Documentation</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-5 order-md-last order-first">
                            <img alt="something"  src={homeImg} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}