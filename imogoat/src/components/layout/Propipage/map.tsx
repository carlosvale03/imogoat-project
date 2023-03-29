import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./map.css"

export interface MapPageProps {}

function MapPage({ item }) {
  // Define a posição do marcador no mapa
    const position={
      lat: item.lat, 
      lng: item.lng}

    // Carrega a API do Google Maps
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAk2BJAB3J_mTKOddSQ7glVdd00x8xUvJQ"
    })
    return (
    <div className="map">
      {/* Verifica se a API do Google Maps foi carregada com sucesso */}
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width: '100%', height: '100%'}}
          center={position}
          zoom={18}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        // Renderiza um elemento vazio caso a API do Google Maps não tenha sido carregada
        <></>
      )}
    </div>
    )
}

export default MapPage