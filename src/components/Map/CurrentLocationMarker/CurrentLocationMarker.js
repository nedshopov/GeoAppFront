import { Marker, Popup, Circle } from 'react-leaflet';
import { useEffect } from 'react';

import useGeolocation from '../../../hooks/useGeolocation'

function CurrentLocationMarker({ getCurrentLocationHandler, radius }) {
    const currentLocation = useGeolocation();

    useEffect(() => {
        getCurrentLocationHandler(currentLocation);
    }, [currentLocation, getCurrentLocationHandler])

    return currentLocation === null ? null : (
        <>
            <Marker position={currentLocation}>
                <Popup>You are here</Popup>
            </Marker>
            <Circle center={currentLocation} pathOptions={{ fillColor: 'blue', fillOpacity: 0.15, stroke: false }} radius={radius * 1000} />
        </>
    )
}

export default CurrentLocationMarker