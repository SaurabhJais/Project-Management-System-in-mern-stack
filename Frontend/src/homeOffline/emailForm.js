import React from "react"
import "../index.css"
import * as mailImg from "../assets/homeEmail.jpg"
import * as me from "../assets/me.jpg"
import "../index.css"

export default class SectionFive extends React.Component {
    componentDidMount() {

        function animText(words) {
            let elem = document.getElementById("animatingText")
            let text = "Get the source code to your Email"
            let counter = 0
            let direction = "backword"

            function oneRound(numberOfLetters = 20) {
                let x = setInterval(() => {
                    if (direction === "backword") {
                        elem.innerText = text.slice(0, text.length - counter)
                        counter++
                        if (counter === numberOfLetters) {
                            direction = "forword"
                        }
                    } else {
                        elem.innerText = text.slice(0, text.length - counter + 1)
                        counter--;
                        if (counter === 0) {
                            direction = "backword"
                            clearInterval(x)
                        }
                    }
                }, 70);
            }

            setInterval(() => {
                oneRound(20)
            }, 5000);

        }

        animText(20);


        function blinkingCursor() {
            let d = document.getElementById("blinkLikeCursor")
            setInterval(() => {
                if (d.style.color === "white") {
                    d.style.color = "green"
                } else {
                    d.style.color = "white"
                }
            }, 1000)
        }

        blinkingCursor()
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row mx-3">
                    <div data-aos="fade-up" className="col-md-6  border p-0 rounded-lg order-md-0 order-1" style={{ height: "550px", position: "relative" }}>

                        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 78%, 0% 100%)", backgroundImage: `url(${mailImg})`, backgroundPosition: "center", height: "300px", width: "100%", overflow: "hidden" }} >
                        </div>

                        <div className="rounded-circle bg-success shadow" style={{ height: "50px", width: "50px", position: "absolute", top: "220px", right: "100px" }}>
                            <img src={me} alt="somehting alt" className="img-fluid rounded-circle"></img>
                        </div>


                        <form action="/" className="px-md-5 px-2 pt-2">
                            <div className="form-group">
                                <input type="text" placeholder="Enter your email" className="form-control shadow-none border-0 border-bottom font-weight-bold" id="name"></input>
                                <br />
                            </div>
                            <div className="form-group">
                                <input className="form-control shadow-none border-0  border-bottom font-weight-bold" type="email" id="email" placeholder="Enter your name"></input>
                                <br />
                            </div>
                            <button className="btn btn-block text-white mt-3 font-weight-bold py-3" style={{ background: "blueviolet" }}>Submit to get the code</button>
                        </form>


                    </div>
                    <div data-aos="fade-up" className="col-md-6  order-md-1 order-0">

                        <div className="row ml-md-5   mb-5 pt-md-5">
                            <h1 className="font-weight-light display-3 text-center font-weight-bold mb-5 text-md-left">This is an <span style={{ color: "blueviolet" }}>Open source </span> Project</h1>
                            <div style={{height: "50px"}}>
                                <h4 className="text-success font-weight-bold text-center text-md-left">
                                    <span id="animatingText" style={{ color: "blueviolet" }} >Get source code on your Email</span>
                                    <span className="font-weight-bolder" id="blinkLikeCursor"> |</span>
                                </h4>
                            </div>
                            <h6 className="font-weight-normal text-center text-md-left text-muted mt-3" style={{ wordSpacing: "5px" }}>This is an open source project. You can get the source code of this project on github or you can download the ZIP file of codes by filling the give little form.</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
