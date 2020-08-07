import React, { useEffect, useState } from 'react'
import getMonitorioStats from '../../services/API/getMonitoreoStats'

const UpTimes = props => {
  const [ up24, setUp24 ] = React.useState("0")
  const [ up7, setUp7 ] = React.useState("0")
  const [ up30, setUp30 ] = React.useState("0")
  const [ maxCon, setMaxCon ] = React.useState("0")

  React.useEffect(() => {
    getMonitorioStats(props.row.RouterId).then(data => {
      setUp24(data.data.up24)
      setUp7(data.data.up7)
      setUp30(data.data.up30)
      setMaxCon(data.data.maxCon)

    })
  }, [])
  
  return(
    <div className="flex-space-between">
      <div className="up-time-item">
        <h1>{up24}</h1>
        <h2>UP TIME (ULT 24 HORAS)</h2>
      </div>
      <div className="up-time-item">
        <h1>{up7}</h1>
        <h2>UP TIME (ULT 7 DÍAS)</h2>
      </div>
      <div className="up-time-item">
        <h1>{up30}</h1>
        <h2>UP TIME (ULT 30 DÍAS)</h2>
      </div>
      <div className="up-time-item">
        <h1>{maxCon}</h1>
        <h2>CONEXCIONES SIMULTANEAS</h2>
        <h2>(ULT 24 HRS)</h2>
      </div>
    </div>
  )
}

export default UpTimes