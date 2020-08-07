import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

require ('./RoundedBars.js')

export class StackedBarHorarios extends Component {
  render() {
    return (
      <div>
        <Bar 
          data={this.props.data}
          height={370}
          width={100}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend:{display:false}, 
            cornerRadius: 6,
            scales: {
              xAxes: [{
                  stacked: true,
                  barThickness: 10,
                  gridLines:{
					          display:false,
				          }  
              }],
              yAxes: [{
                  stacked: true
              }]
            }
          }}
        />
      </div>
    )
  }
}

export default StackedBarHorarios
