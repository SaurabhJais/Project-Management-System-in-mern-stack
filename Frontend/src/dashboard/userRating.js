import React from "react"
import Chart from "chart.js"

export default class UserRating extends React.Component{

    state={
        overAll : 4.2
    }

    componentDidMount(){
        var ctx = document.getElementById("myChart");

        var myPieChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                 labels: ["1", "2", "3", "4", "5"],
                 datasets: [{
                    label: '# of Votes',
                    data: this.props.data,
                    backgroundColor: [
                        'lightgrey',
                        '#ccb3e4',
                        '#b17be4',
                        '#9950de',
                        '#7708de',
                     ],
                    weight: 0.3
                }]
            },
         });
    }
    render(){
        return(
            <div className=" d-flex justify-content-center mt-md-4">
                <div className="row mt-md-5" id="rating"  >
                    <div className="col-md-4">
                        <h4 className="font-weight-bold text-muted text-center mt-md-2">Overall Rating</h4>
                        <h1 className="text-center display-1 mt-md-4 font-weight-bolder">{this.state.overAll}</h1>
                    </div>
                    <div className="col-md-8">
                        <canvas id="myChart" height="40px" width= "80px"></canvas>
                    </div>
                </div>

             </div>
        )
    }
}