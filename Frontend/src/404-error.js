import React from "react"
import * as gif_image from "./assets/Creativity.gif"

export default () => {
    return (
        <>
            <img className="img-fluid  h-75 w-auto mx-auto d-block" src={gif_image} />
            <h1 className="display-1 text-center font-weight-bold">ERROR 404</h1>
            <p className="display-5 text-center">Page not found</p>
        </>
    )
}