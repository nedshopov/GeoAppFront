import LocationMarker from '../LocationMarker/LocationMarker';

// LIBRARIES
import { useState, useEffect } from 'react';
import { useMapEvents } from 'react-leaflet';

function LocationMarkersContainer({ fetchedPlaces }) {
    const [showTooltips, setShowTooltips] = useState(false);

    const map = useMapEvents({
        zoom(e) {
            if (map.getZoom() >= 16) {
                setShowTooltips(true);
            } else if (map.getZoom() < 16) {
                setShowTooltips(false);
            }
        }
    })

    useEffect(() => {
        if (map.getZoom() >= 16) {
            setShowTooltips(true);
        }
    }, [map])

    return (
        <>
            {fetchedPlaces.map((place) => (
                <LocationMarker key={place.id} placeInfo={place} showTooltips={showTooltips}/>
            ))}
        </>
    )
}

export default LocationMarkersContainer
