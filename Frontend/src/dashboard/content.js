import React from "react"
import UserRating from "./userRating"
import TechsUsed from "./techsUsed"
import Contributers from "./contribution.js"
import Social from "./social"

export default class Content extends React.Component {
    state = {
        allProjects: 0,
        completedProjects: 0,
        pendingProjects: 0
    }

    componentDidMount() {
        setTimeout(() => {
            let x = setInterval(() => {
                this.setState({ allProjects: this.state.allProjects + 1, })
                if (this.state.allProjects === 20) { clearInterval(x) }
            }, 100)

            let y = setInterval(() => {
                this.setState({ pendingProjects: this.state.pendingProjects + 1, })
                if (this.state.pendingProjects === 3) { clearInterval(y) }
            }, 100)

            let z = setInterval(() => {
                this.setState({ completedProjects: this.state.completedProjects + 1, })
                if (this.state.completedProjects === 17) { clearInterval(z) }
            }, 100)
        }, 1000);
    }

    render() {
        return (
            <div className="container-fluid ml-lg-3">
                <div className="row ">

                    <div className="col-lg-4 col-12 mt-3 ">

                        <div className="row   border  rounded-lg mb-4" style={{ height: "200px" }} >
                            <div className="d-flex mt-3 justify-content-between">
                                <h6 className="text-muted font-weight-bold">All Projects</h6>
                                <h6 className="text-primary font-weight-bold">All Time</h6>
                            </div>
                            <h1 className="text-center display-1 font-weight-bolder text-black">{this.state.allProjects}</h1>
                        </div>

                        <div className="row   border  rounded-lg my-4" style={{ height: "200px" }} >
                            <div className="d-flex mt-3 justify-content-between">
                                <h6 className="text-muted font-weight-bold">Pending Projects</h6>
                                <h6 className="text-primary font-weight-bold">All Time</h6>
                            </div>
                            <h1 className="text-center mt-4 display-1 font-weight-bolder text-black">{this.state.pendingProjects}</h1>
                        </div>

                        <div className="row   border  rounded-lg my-4" style={{ height: "200px" }} >
                            <div className="d-flex mt-3 justify-content-between">
                                <h6 className="text-muted font-weight-bold">Completed Projects</h6>
                                <h6 className="text-primary font-weight-bold">All Time</h6>
                            </div>
                            <h1 className="text-center mt-4 display-1 font-weight-bolder text-black">{this.state.completedProjects}</h1>
                        </div>
                    </div>


                    <div className="col-lg-8 col-12" >

                        <div className="row ml-lg-4">
                            <div className="col-lg-11 col-12 border  rounded-lg   mt-4 " style={{ height: "400px", }}>
                                <div className="d-flex mt-3 justify-content-between">
                                    <h6 className="text-muted font-weight-bold">Ratings</h6>
                                </div>
                                <UserRating data={[3, 2, 3, 5, 12]} />
                            </div>
                        </div>


                        <div className="row ml-lg-4">

                            <div className="col-lg-5 col-12 mt-3 border  rounded-lg   " >
                                <div className="mt-3">
                                    <h6 className="text-muted font-weight-bold">Technologies Used</h6>
                                </div>
                                <TechsUsed techs={["HTML", "CSS", "Javascript", "Bootstrap", "Jquery", "React", "Python", "Django", "MongoDb"]} />
                            </div>

                            <div className="col-lg-5 col-12 mt-3 border  rounded-lg   mx-lg-5 " style={{ height: "200px" }}>
                                <div className="d-flex mt-3 justify-content-between">
                                    <h6 className="text-muted font-weight-bold">Contributers</h6>
                                </div>
                                <Contributers contributers={["_Saurabh_jaiswal", "_shyam5435", "parmanu_434", "eds34"]} />
                            </div>

                        </div>



                        <div className="row ml-lg-4">
                            <div className="col-lg-11 col-12 border  rounded-lg   my-4 ">
                                <div className="d-flex mt-3 justify-content-between">
                                    <h6 className="text-muted font-weight-bold">Social Media</h6>
                                </div>
                                <Social social={{
                                    facebook: "http://facebook.com",
                                    instagram: "http://instagram.com",
                                    linkedin: "http://linkedin.com",
                                    twitter: "http://twitter.com",
                                    github: "http://github.com",
                                    pinterest: "http://pinterest.com",
                                    reddit: "http://reddit.com",
                                    youtube: "http://youtube.com"
                                }} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}