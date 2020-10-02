import React from "react"
import * as gif from "./assets/loading.gif"
import "./index.css"

export default () => {
    return (
        <>
            <div className="loadingDiv">
                <img src={gif} className="loadingGIF" />
            </div>
        </>
    )
}
