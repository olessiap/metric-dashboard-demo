import React, { Component } from 'react'
import { Bar } from "react-chartjs-2"

require ('./RoundedBars.js')

export class BarGraph extends Component {
  render() {
    return (
      <div>
        <Bar 
          data={this.props.data}
          height={this.props.height}// height={370}
          margin={10}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend:{display:false}, 
            cornerRadius: 6,
            scales: {
              yAxes:[{
                ticks : {
                  max : 10,    
                  min : 0
                }
              }],
              xAxes: [{
                  barThickness: 10,
                  gridLines:{
					          display:false,
				          },
                  barPercentage: 0.7,
                  categoryPercentage: 0.1  
              }],
              showScale:true
            }
          }}
        />
      </div>
    )
  }
}

export default BarGraph
