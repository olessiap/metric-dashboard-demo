import React from 'react'
import { Line } from 'react-chartjs-2';

const LineGraph = props => {
  return (
    <div>
      <Line
        data={props.data}
        height={210}
        width={100}
        options={{ 
          maintainAspectRatio: false, 
          legend:{display:false}
          }}
      />
    </div>
  )
}


export default LineGraph