import { Marker, Popup, Circle, useMapEvents } from 'react-leaflet';
import { useEffect, useState } from 'react';

import useGeolocation from '../../../hooks/useGeolocation'

function CurrentLocationMarker({ getCurrentLocationHandler, radius }) {
    const [currentLocation, setCurrentLocation] = useState(null)

    const location = useGeolocation()

    const map = useMapEvents({
        dblclick(e) {
            setCurrentLocation(e.latlng);
            getCurrentLocationHandler(e.latlng);
            map.flyTo(e.latlng, map.getZoom())
        }
    })

    useEffect(() => {
        setCurrentLocation(location);
        getCurrentLocationHandler(location);
    }, [location, getCurrentLocationHandler])

    return currentLocation === null ? null : (
        <>
            <Marker position={currentLocation}>
                <Popup>You are here</Popup>
            </Marker>
            <Circle
                center={currentLocation}
                pathOptions={
                    {
                        fillColor: 'blue',
                        fillOpacity: 0.15,
                        stroke: false
                    }
                }
                radius={radius * 1000}
            />
        </>
    )
}

export default CurrentLocationMarker