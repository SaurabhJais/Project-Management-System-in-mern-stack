import React from "react"
import * as facebook from "../assets/facebook.png"
import * as instagram from "../assets/instagram.png"
import * as twitter from "../assets/twitter.png"
import * as linkedin from "../assets/linkedin.png"
import * as youtube from "../assets/youtube.png"
import * as reddit from "../assets/reddit.png"
import * as pinterest from "../assets/pinterest.png"
import * as github from "../assets/github.png"

export default class Social extends React.Component{
    render(){
        return(
           <div className="my-2">
               {
                    Object.keys(this.props.social).map((item, index)=>{
                        switch (item){
                            case "github" : return <a target="blank" key={index} href={this.props.social[item]}><img alt="projecto" className="mr-3 mt-2  p-1  " height="30px" src={github}></img></a>
                            case "linkedin" : return <a target="blank" key={index} href={this.props.social[item]}><img alt="projecto" className="mr-3 mt-2  p-1  " height="30px" src={linkedin}></img></a>
                            case "facebook" : return <a target="blank" key={index} href={this.props.social[item]}><img alt="projecto" className="mr-3 mt-2  p-1 " height="30px" src={facebook}></img></a>
                            case "twitter" : return <a target="blank" key={index} href={this.props.social[item]}><img alt="projecto" className="mr-3 mt-2  p-1 " height="30px" src={twitter}></img></a>
                            case "instagram" : return <a target="blank" key={index} href={this.props.social[item]}><img alt="projecto" className="mr-3 mt-2  p-1 " height="30px" src={instagram}></img></a>
                            case "youtube" : return <a target="blank" key={index} href={this.props.social[item]}><img alt="projecto" className="mr-3 mt-2  p-1 " height="30px" src={youtube}></img></a>
                            case "pinterest" : return <a target="blank" key={index} href={this.props.social[item]}> <img alt="projecto" className="mr-3 mt-2  p-1 " height="30px" src={pinterest}></img></a>
                            case "reddit" : return <a target="blank" key={index} href={this.props.social[item]}><img alt="projecto" className="mr-3 mt-2  p-1 " height="30px" src={reddit}></img></a>
                            default : return alert("Social media does not exist....")
                        }
                    })
                
               }
           </div>
        )
    }
}