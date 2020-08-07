import React, { Component } from 'react'
import { Doughnut} from 'react-chartjs-2';

export class DoughnutGraph extends Component {
  render() {
    return (
      <div className="graphDWrapper">
        <div className="flex d-flex">
          <p className="inside-percent">{this.props.insidePercent}</p>
          <p className="inside-label">{this.props.insideLabel}</p>
        </div>
       <Doughnut 
         data={this.props.data}
         width={this.props.width}
         height={this.props.height}
         options={{
            maintainAspectRatio: false, 
            legend:{display:false},
            cutoutPercentage: 92,
            tooltips: {
              displayColors: false,
            }}
         }
       />
      </div>
    )
  }
}

export default DoughnutGraph
