import React from "react"
import * as profileImg from "../assets/me.jpg"

export default class Profile extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3 justify-content-center">
                        <center>
                            <div style={{
                                border: "4px solid white",
                                borderRadius: "15px",
                                marginTop: "10px",
                                boxShadow: "1px 1px 5px 1px lightgray",
                                height: "150px",
                                width: "50%",
                                backgroundImage: `url(${profileImg})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}>
                            </div>
                            <p className="font-weight-bold my-4">Saurabh Jaiswal</p>
                            <p className="">JavaScript, C, C++, Dart, HTML, CSS, Bootstrap, React.js, Node.js, MongoDb, SQL</p>
                        </center>
                    </div>
                    <div className="col-md-9 bg-danger" style={{ height: "800px" }}></div>
                </div>
            </div>
        )
    }
}