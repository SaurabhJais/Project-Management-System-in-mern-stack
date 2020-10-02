import React from "react"
import "./project.css"
import { Link } from "react-router-dom"

export default class Project extends React.Component{
    render(){
        let cp = []
        function renderProjects () {
             for(let i=0; i<= 15; i++){
                cp.push(
                    <div className="border rounded-lg col-md-5 mr-md-5 ml-md-4 mb-5 mt-md-3">
                        <p className="mt-3">
                            <Link to="#" style={{color: "blueviolet", fontWeight: "600"}} className="text-decoration-none">Project Name</Link>
                        </p>

                        <p style={{fontSize: "12px"}}>Quickly customize the calendar UI. You can use EasyCalendar to quickly get the calendar style UI.</p>
                        <p className="font-weight-bold">Java</p>
                     </div>)
            }
            return cp
        }

        return(
            <>
                <div  className="container">
                    <div className="row justify-content-center">
                        {
                            renderProjects().map(item => item)
                        }
                    </div>
                </div>
            </>
        )
    }
}