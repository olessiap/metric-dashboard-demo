import React, { useContext, useEffect } from 'react'
import { DashboardContext } from '../../../contexts/DashboardContext';

function CustomerName() {
  const { globalData  } = useContext(DashboardContext)
  return (
    <p style={{fontSize:'22px', marginBottom:'10px'}}>{globalData.loginData ? "Gandalf" : null}</p>
  )
}

export default CustomerName
