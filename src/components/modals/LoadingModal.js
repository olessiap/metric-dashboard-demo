import React, { useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { DashboardContext } from '../../contexts/DashboardContext'
import Axios from 'axios'


const LoadingModal = props => {
  const { globalData, dispatch } = useContext(DashboardContext)
 
  const handleCancel = () => {
    if(props.loginModal) {
      dispatch({ type: "CANCEL_LOGIN"})
      dispatch({ type: "TOGGLE_MODAL"})
    }
    if(props.dataLoadingModal) {
      //cancel API REQUEST
    }
  }

  return (
    <Modal dialogClassName={props.loginModal ? "loadingModalLogin" : "loadingModalDashboard"} 
      {...props}
      show={true} 
      onHide={props.handleClose} 
      animation={true}>
      <div className="loading-wrapper">
        <div className="gif-wrapper">
          <img src="./images/loading-gif.gif" alt="loading..."/>
        </div>
        <div className="loading-title">
          {globalData.loggingIn ? (
              <h3>Logging in</h3>
          ) : (
            <>
              <h3>Cargando</h3>
              <h3>información</h3>
            </>    
          )}
        </div>
        {props.loginModal && (
          <button onClick={handleCancel}>CANCELAR</button>
        )}
      </div>
    </Modal>
  )
}

export default LoadingModal