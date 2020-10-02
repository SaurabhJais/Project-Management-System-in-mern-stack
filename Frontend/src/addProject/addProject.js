import React from "react"
import axios from "axios"
import Cookie from "universal-cookie"

const cookies = new Cookie()

export default class AddProject extends React.Component {
    constructor(){
        super()
        this.submitHandler = this.submitHandler.bind(this)
        this.onchangeHandler = this.onchangeHandler.bind(this)
        this.state = {
            token: cookies.get("token")
        }
    }

    onchangeHandler(e){
        this.setState({
            [e.target.name] : e.target.value,
        })
    }


    submitHandler(e){
        e.preventDefault()
        console.log(this.state)
        axios.post("/add-project", {...this.state}).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            alert(err)
        })
    }

    render() {
        return (
            <>
                <br />
                <h1 className="text-center font-weight-bold">Add Project</h1>
                <div className="container-fluid d-flex justify-content-center w-100">
                    <form onSubmit={this.submitHandler} className="w-50">
                        <br />
                        <div className="">
                            <label className="form-label">Enter Project Name</label>
                            <input onChange={this.onchangeHandler} name="project_name" className="form-control" />
                        </div>
                        <br />
                        <div>
                            <label className="form-label">Enter Project Link</label>
                            <input onChange={this.onchangeHandler} name="project_link" className="form-control" />
                        </div>
                        <br />
                        <div>
                            <label className="form-label">Technologies Used</label>
                            <input onChange={this.onchangeHandler} name="techonology_used" className="form-control" />
                        </div>
                        <br />
                        <div>
                            <label className="form-label">Number of people involved</label>
                            <input onChange={this.onchangeHandler} name="people_involved" className="form-control" />
                        </div>
                        <br />
                        <div>
                            <label className="form-label">Time take to complete</label>
                            <input onChange={this.onchangeHandler} name="time_taken" className="form-control" />
                        </div>
                        <br />
                        <div>
                            <label className="form-label">Collaborated with (Use comma seperated userNames)</label>
                            <input onChange={this.onchangeHandler} name="colaborated_with" className="form-control" />
                        </div>
                        <br />
                        <div>
                            <label className="form-label">Enter description</label>
                            <textarea onChange={this.onchangeHandler} name="project_description" className="w-100 form-control" style={{ height: "200px" }} />
                        </div>
                        <br />
                        <div>
                            <button type="submit" className="btn text-white font-weight-bold w-100" style={{background: "blueviolet"}}>submit</button>
                        </div>
                        <br />
                    </form>
                </div>
            </>
        )
    }
}

