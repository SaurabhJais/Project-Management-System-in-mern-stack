import React from "react"
import * as first from "../assets/crsl_1.jpg"
import * as second from "../assets/crsl_2.jpg"
import * as third from "../assets/crsl_3.jpg"
import AOS from "aos"
import "../../node_modules/animate.css/animate.min.css"


export default class SectionSix extends React.Component {
    componentDidMount() {

        AOS.init()
        
        function carousel(activeItem = 0) {
            let data = [
                {
                    title: "This is first thing",
                    img: first,
                    description: "This is some text. My name is saurabh jaiswal i am a software engineer. I am a self employed guy"
                },
                {
                    title: "This is second thing",
                    img: second,
                    description: "This is description of th first element which can be long This is description of th first element which can be long This is description of th first element which can be long This is description of th first element which can be long"
                },
                {
                    title: "This is third thing",
                    img: third,
                    description: "This is description of th first element which can be long This is description of th first element which can be long This is description of th first element which can be long This is description of th first element which can be long"
                }
            ]

            let nextButton = document.getElementById("next-button");
            let prevButton = document.getElementById("prev-button");
            let carouselImg = document.getElementById("carouselImg")
            let carouselTitle = document.getElementById("carouselTitle")
            let carouselDesc = document.getElementById("carouselDesc")

            function addAnimation() {
                carouselTitle.classList.add("animate__fadeIn")
                carouselImg.classList.add("animate__fadeIn")
                carouselDesc.classList.add("animate__fadeIn")
            }

            function removeAnimation() {
                carouselTitle.classList.remove("animate__fadeIn")
                carouselImg.classList.remove("animate__fadeIn")
                carouselDesc.classList.remove("animate__fadeIn")
            }

            function display(activeItem) {
                removeAnimation()
                setTimeout(() => {
                    addAnimation()
                }, 0)
                carouselImg.style.backgroundImage = `url(${data[activeItem].img})`
                carouselTitle.innerText = data[activeItem].title
                carouselDesc.innerText = data[activeItem].description
            }

            nextButton.addEventListener("click", () => {
                if (activeItem < (data.length - 1)) {
                    activeItem++;
                    console.log(activeItem)
                    display(activeItem)
                }
            })

            prevButton.addEventListener("click", () => {
                if (activeItem > 0) {
                    activeItem--;
                    console.log(activeItem)
                    display(activeItem)
                }
            })
            
            display(activeItem)  //  For initial filling
        }


        carousel(0)

    }


    render() {
        return (
            <div className="container px-5 mt-md-10 px-md-0">
                <div data-aos="fade-up" className="mt-5 mb-5 position-relative" style={{ width: "100%" }}>

                    <div id="prev-button" className="position-absolute rounded-circle shadow" style={{ zIndex: "111", cursor: "pointer", height: "60px", width: "60px", left: "-40px", background: "blueviolet" }}>
                        <div className="d-flex justify-content-center mt-3 font-weight-bold text-white">
                            <i className="material-icons">arrow_back</i>
                        </div>
                    </div>
                    <div id="next-button" className="position-absolute rounded-circle shadow" style={{ zIndex: "1111", cursor: "pointer", height: "60px", width: "60px", right: "-30px", background: "blueviolet" }}>
                        <div className="d-flex justify-content-center mt-3 font-weight-bold text-white">
                            <i className="material-icons">arrow_forward</i>
                        </div>

                    </div>

                    <div className="row   border border-darken-1">

                        <div id="carouselImg" className="col-md-6 animate__animated" style={{ height: "400px", backgroundPosition: "center", backgroundSize: "cover" }}>
                        </div>

                        <div id= "carouselText" className="col-md-6 mt-5">
                            <h1 id="carouselTitle" className="text-center mt-5 animate__animated  font-weight-bold"> </h1>
                            <h6 id="carouselDesc" className="text-center animate__animated  font-weight-light pt-md-5 px-5" style={{wordSpacing: "6px"}}> </h6>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}