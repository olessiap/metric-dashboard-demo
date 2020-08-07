import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { DashboardContext } from '../../../contexts/DashboardContext';
import { domain } from "../../../components/App/App"
import { GoogleMap, withScriptjs, withGoogleMap, Marker,InfoWindow } from 'react-google-maps'
import mapStyles from './mapStyles'


function Map() {
  const { globalData, dispatch } = useContext(DashboardContext)
  const [selectedMarker, setSelectedMarker] = useState(null)

  if(globalData.loginData) {
    var rtrs = globalData.loginData.routersInfo.reduce((accumulator, routerinfo) => {
      if(!accumulator)
          accumulator = [];
      
      return accumulator.concat(routerinfo.routers);
    }, 0);
    if(selectedMarker) {
      var fRtr = rtrs.find(r => r.Id == selectedMarker.RouterId);
    }
  }

  return (
    <GoogleMap  
      defaultZoom={12}
      defaultCenter={globalData.markerData.length > 0 ? globalData.defaultCenter : null}
      defaultOptions={{ styles: mapStyles }}
      key={new Date().getTime()}
    >
      {/* map over the marker data here */}
      {globalData.markerData.length > 0 ? globalData.markerData.map((marker) => (
        <Marker 
          key={marker.RouterId} 
          position={{
            lat:marker.Lat,
            lng:marker.Lng
          }}
          onClick={() => {
            setSelectedMarker(marker)    
          }}
          icon={{
            url: '/icons/Dot1.png',
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
        )): null}

        {selectedMarker && (
          <InfoWindow
            position={{
              lat:selectedMarker.Lat,
              lng:selectedMarker.Lng
            }}
            onCloseClick={() => {
              setSelectedMarker(null)
            }}
          >
            <div className="map-marker">
              <p style={{fontWeight:'bold', paddingBottom:'5px'}}>Hotspot: {fRtr.Hotspot}</p>
              <p>Ubicación: {fRtr.Ubicacion}</p>
              <p>Sector: {fRtr.Sector}</p>
              <p>Ultimo contacto: {selectedMarker.LastContact} </p>
              <p>Usuarios activos: {selectedMarker.Conexiones}</p>
            </div>
          </InfoWindow>
        )}
    </GoogleMap>
  )  
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const GoogleMapComponent = () => {
  const { globalData, dispatch } = useContext(DashboardContext)
  return (
    <div className="map-side">
        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDsnwxmsrbpTMeTrJaYMo3VcaWMLJv16lE`}
          loadingElement={<div style={{height:'100%'}}/>}
          containerElement={<div style={{height:'100%'}}/>}
          mapElement={<div style={{height:'100%'}}/>}

        />
    </div>
  )
}

export default GoogleMapComponent