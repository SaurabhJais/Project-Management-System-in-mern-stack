import React from "react"
import { Link } from "react-router-dom"
import "./dashboard.css"

export default class Sidebar extends React.Component {

    render() {

        setInterval(() => {
            let x = document.querySelectorAll("#dashboardSidebar a")
            let windowUrl = window.location.href
            x.forEach((y) => {
                if (windowUrl === y.href) {
                      y.parentElement.style.backgroundColor = "blueviolet"
                      y.style.color = "white"
                } else {
                    y.parentElement.style.backgroundColor = "transparent"
                    y.style.color = "black"
                }
            })
        }, 1);

        return (
            <>
                <ul id="dashboardSidebar" className="list-unstyled">
                    <li className="p-2 my-2"><Link to="/">Dashboard</Link></li>
                    <li className="p-2 my-2"><Link to="/add-project">Add Project</Link></li>
                    <li className="p-2 my-2"><Link to="/project"> My projects</Link></li>
                    <li className="p-2 my-2"><Link to="/profile"> Profile</Link></li>
                    <li className="p-2 my-2"><Link to="#/"> Change Password</Link></li>
                    <li className="p-2 my-2"><Link to="#/"> Help</Link></li>
                    <li className="p-2 my-2"><Link to="#/"> About Project</Link></li>
                </ul>
            </>
        )
    }
}