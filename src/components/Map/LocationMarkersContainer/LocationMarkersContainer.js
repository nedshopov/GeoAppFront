import LocationMarker from '../LocationMarker/LocationMarker';

// LIBRARIES
import { useState } from 'react';
// import { useMapEvents } from 'react-leaflet';

function LocationMarkersContainer({ fetchedPlaces }) {
    const [permanentTooltips, setPermanentTooltips] = useState(false);

    // const map = useMapEvents({
    //     zoom(e) {
    //         if (map.getZoom() >= 16) {
    //             setPermanentTooltips(true);
    //         } else if (map.getZoom() < 16) {
    //             setPermanentTooltips(false);
    //         }
    //     }
    // })

    // useEffect(() => {
    //     if (map.getZoom() >= 16) {
    //         setPermanentTooltips(true);
    //     }
    // }, [map])

    return (
        <>
            {fetchedPlaces.map((place) => (
                <LocationMarker key={place.id} placeInfo={place}/>
            ))}
        </>
    )
}

export default LocationMarkersContainer
