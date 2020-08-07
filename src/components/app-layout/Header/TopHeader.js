import React from 'react'
import CustomerName from './CustomerName'
import HeaderUltimoUpdate from './HeaderUltimoUpdate'

function TopHeader() {
  return(
    <div className="top-header">
      <img className="admin-logo" src="./images/main-logo.svg" />
      <div className="header-wrapper">
        <CustomerName className="header-name" />
        <HeaderUltimoUpdate />   
      </div>    
      <div className="header-separator"></div> 
    </div>
  )
}

export default TopHeader