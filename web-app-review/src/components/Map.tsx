import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

// based on https://developers.google.com/maps/documentation/javascript/adding-a-google-map

let counter = 0;

// type Props = {
//     setLocation?: function
// }

const GoogleMap = ({ setLocation } : any) => {
    let mapPosition = { lat: -25.344, lng: 131.036 };
    
    const { ref, map, google } = useGoogleMaps(
        // Salvar esta clave en otra parte
        "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
        {
            zoom: 4,
            center: mapPosition,
        },
    );
    // console.log("render MapWithMarkers");

    if (map && counter < 1) {
        counter += 1;
        setLocation({
            latitud: 131.036,
            longitud: -25.344,
        })
        
        // Esta entrando dos vecess aqui y por eso aparecen dos markers
        // execute when map object is ready
        let marker = new google.maps.Marker({ position: mapPosition, map, draggable: true });
        
        google.maps.event.addListener(marker, 'dragend', function (marker: any) {
            var latLng = marker.latLng;
            setLocation({
                latitud: latLng.lat(),
                longitud: latLng.lng(),
            })
        }); 
        
    }

    return (
        <div>
            <div ref={ref} style={{ width: 400, height: 300 }} />
        </div>
    );
};

export default GoogleMap;