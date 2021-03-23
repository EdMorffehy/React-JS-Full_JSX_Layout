import React from "react";
import style from "../contacts.module.css";
import  { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCEeMKN7zfqVK_750SIueLKAEt1akwTF_0"
    })

    const mapContainerStyle = {
        height: "200px",
        width: "200px",
    };

    const center = {
        lat: 40.199812,
        lng: 44.491292,
    };

    return isLoaded ? (
        <div className={style.map}>
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={16}
                center={center}
            >
                <Marker position={{lat:center.lat, lng:center.lng}}/>

            </GoogleMap>
        </div>
    ) : <>error Map</>
}



export default Map;