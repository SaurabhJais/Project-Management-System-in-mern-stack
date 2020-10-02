import React from "react"

export default class SectionSeven extends React.Component {
    render() {
        return (
            <div className="container-fluid py-4" style={{ backgroundColor: "#f1f4f8" }}>
                <div className="row justify-content-center">
                    <div  data-aos="fade-up" className="col-md-3" >
                        <h1 className="display-1 text-center">Pricing</h1>
                        <div className=" d-block text-center mx-auto mt-5" >
                            <div className="shadow pt-4 " style={{background: "white", borderRadius: "15px"}}>
                                <p className="border d-inline p-2 px-5 bg-primary text-white font-weight-bold rounded-lg mt-5">STANDARD</p>
                                <h4 className="text-center mt-5 font-weight-normal">Are you Kidding....</h4>
                                <h1 className="mt-4"><span role="img" aria-labelledby="xyz" >😀</span></h1>
                                <h3 className="font-weight-light mt-5">This is an open source project All the codes are visible to you. No any pricing here.</h3>
                                <button className="btn btn-success shadow btn-block mt-5 border-0 font-weight-bold py-3" style={{borderRadius: "15px"}}>Get is now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}