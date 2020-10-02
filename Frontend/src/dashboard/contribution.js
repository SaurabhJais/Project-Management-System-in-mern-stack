import React from "react"
import {Link} from "react-router-dom"

export default class Contribution extends React.Component{
    render(){
        return(
            <div className="d-flex flex-wrap">
                {
                    this.props.contributers.map((name, index)=>{
                        return <Link key={index} className="mx-3 font-weight-bolder text-primary" to={`/${name}`} > {`@${name}`} </Link>
                    })
                }
            </div>
        )
    }
}