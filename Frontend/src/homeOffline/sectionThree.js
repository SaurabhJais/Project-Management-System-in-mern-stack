import React from "react"
import * as icon1 from "../assets/icon1.png"
import * as icon3 from "../assets/icon3.png"


export default class sectionThree extends React.Component {
    render() {
        return (
            <div data-aos="fade-up" className="container pt-5 mb-5 pb-5">
                <h1 className="text-center display-4 font-weight-bold my-5 pb-5" >Experience the Projecto advantage.</h1>
                <div className="row mx-3">
                    <div   className="col-md-4">
                        <div className="row">
                            <img style={{ height: "auto", width: "auto" }} src={icon1} alt="something"></img>
                            <h3 className="mt-3 font-weight-bold">Built for developers</h3>
                            <p className="text-muted font-weight-normal">Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
                        </div>
                    </div>
                    <div   className="col-md-4">
                        <div className="row">
                            <img style={{ height: "auto", width: "auto" }} src={icon1} alt="something"></img>
                            <h3 className="mt-3 font-weight-bold">Built for developers</h3>
                            <p className="text-muted font-weight-normal">Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
                        </div>
                    </div>
                    <div  className="col-md-4">
                        <div className="row">
                            <img style={{ height: "auto", width: "auto" }} src={icon3} alt="something"></img>
                            <h3 className="mt-3 font-weight-bold">Built for developers</h3>
                            <p className="text-muted font-weight-normal">Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}