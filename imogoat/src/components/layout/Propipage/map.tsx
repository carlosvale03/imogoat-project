import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./map.css"

export interface MapPageProps {}

function MapPage({ item }) {
    const position={
      lat: item.lat, 
      lng: item.lng}

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAk2BJAB3J_mTKOddSQ7glVdd00x8xUvJQ"
    })
    return (<div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width: '100%', height: '100%'}}
          center={position}
          zoom={18}
        >
          <Marker position={position} />
        </GoogleMap>
  ) : <></>}
    </div>)
}

export default MapPage