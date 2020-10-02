import React from 'react'

export default class TechsUsed extends React.Component {
    render() {
        return (
            <div className="mt-2 d-flex flex-wrap">
                     {
                        this.props.techs.map((items, index) => {
                            if(index < 10){
                                return <h6 style={{ fontSize: "13px" }} key={index} className="px-3 py-2 mr-2 rounded-pill bg-dark text-white">{items}</h6>
                            }
                        })
                    }
             </div>
        )
    }
}