import React, { useContext, useState } from 'react'
import HourlyConnections from './HourlyConnections';
import GoogleMapComponent from './GoogleMapComponent';

const MapAndHourlyConnections = () => { 
  return (
    <div className="box map map-wrapper">
      <GoogleMapComponent />
      <HourlyConnections />
    </div>
  )
}

export default MapAndHourlyConnections
