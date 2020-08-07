import React from 'react'

const ActiveState = (props) => {
  let status = props.active ? "activo" : "inactivo"
  return (
    <div className="active-container">
      ESTADO: {status.toUpperCase()} <p className={status}></p>
    </div>
  )
}

export default ActiveState