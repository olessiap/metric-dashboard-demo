import React, { Component } from 'react'
import BoxTitle from "./BoxTitle"
import StatsDots from './StatsDots'
// import UserNumber from '../../Demografico/UltimosUsarios/UserNumber'
import UserNumber from '../../../pages/Demografico/UltimosUsarios/UserNumber'
import StatsDotsGeneros from './StatsDotsGeneros'

const BoxHeader = (props) => {
  return (
    <div className={props.className} id={props.id}>
      <BoxTitle title={props.title} icon={props.icon}/>
      <StatsDots statsDots={props.statsDots} />
      <StatsDotsGeneros statsDotsGeneros={props.statsDotsGeneros}/>
      <UserNumber userNumber={props.userNumber} className={props.className}/>
    </div>
  )
}
  

export default BoxHeader
