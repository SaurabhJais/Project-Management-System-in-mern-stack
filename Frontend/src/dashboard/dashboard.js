import React from "react"
import Sidebar from "./sidebar"
import Content from "./content"
import Projects from "../project/project"
import Profile from "../profile/profile"
import AddProject from "../addProject/addProject"
import ProtectedRoute from "../protectedRoute"
import { Switch, Route } from "react-router-dom"

export default class Dashboard extends React.Component {
    render() {
         return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2  py-3" style={{ borderRight: "1px solid rgb(229 238 239)" }}>
                            <Sidebar />
                        </div>
                        <div className="col-md-10" >
                            <Switch>
                                <Route path="/" exact component={Content} />
                                <Route path="/project" exact component={Projects} />
                                <ProtectedRoute path="/profile" component={Profile}/>
                                <ProtectedRoute path="/add-project" component={AddProject} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}