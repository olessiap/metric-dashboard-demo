import React, { useState, useContext } from 'react'
import { DashboardContext } from '../../../contexts/DashboardContext'
import RouterModal from "../../modals/RouterModal"
// import PlaygroundModal from "../../modals/PlaygroundModal"

const RouterButton = props => {
  const { globalData, dispatch } = useContext(DashboardContext)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
      <div className="modal-wrapper">
        <div className="router-button" onClick={handleShow}>
          <div className="menu-button-wrapper">
            <img src="./icons/calendar.svg" alt=""/> 
              <p>{JSON.parse(localStorage.getItem("checkedRouterIds"))  ? JSON.parse(localStorage.getItem("checkedRouterIds")).length : 0} HOTSPOTS</p>
          </div> 
        </div>
        <RouterModal show={show} handleClose={handleClose}/>
      {/* <PlaygroundModal show={show} handleClose={handleClose}/> */}
      </div>     
   )
}

export default RouterButton
