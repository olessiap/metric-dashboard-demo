import React from 'react'
import CustomerName from '../../../components/app-layout/Header/CustomerName'

class Bienvenido extends React.Component {
  render() {
    return(
      <div className="box bienvenidos">
        <div className="bienvenidos-wrapper">
          <p className="bienvenido-title">Bienvenido</p>   
          <CustomerName className="bienvenidos-name" />
          <p className="bienvenido-text">Lorem ipsum random words that need to fill the space go here </p>
          <button className="bienvenido-button">CALL TO ACTION</button>
        </div>
      </div>
    )
  }   
}

export default Bienvenido

