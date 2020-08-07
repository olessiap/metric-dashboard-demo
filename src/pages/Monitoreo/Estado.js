import React from "react" 
import monitorioData from "./monitoreo-data"

const Estado = props => {
  console.log(props)
  return(
    <div>
      {monitorioData.data.map((item, index) => {
        {/* if(item.id === props.id){ */}
          return <p>`ESTADO: ${item.estado}`</p>
        {/* } */}
      })}
    </div>
  )
}

export default Estado