
"use client"
import React, { useEffect, useState } from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 23.8103968, // Latitude of your desired location
    lng: 90.41256666,

};
const mapStyles = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative.locality", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }, { "color": "#f1c40f" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#eb0254" }, { "visibility": "on" }] }]
function GoogleMapComponents() {
    const [zoom, setZoom] = useState(11)
    useEffect(() => {
        setTimeout(() => {
            setZoom(12)
        }, 300);
    }, [])
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB4iuUg1YDRIBRZ5e-jdssfqDuT9VLiOnY"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);

        setMap(map)

    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
            styles: mapStyles, // Add the custom styles here
        }}

    >
        { /* Child components, such as markers, info windows, etc. */}
        <MarkerF
        position={center}
        icon={{
          url: 'assets/images/marker.png', // Replace with the path to your custom marker image
          scaledSize: new window.google.maps.Size(40, 40), // Adjust the size as needed
        }}
      />
    </GoogleMap>
    ) : <></>
}

export default GoogleMapComponents;

