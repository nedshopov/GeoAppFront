// SERVICES
import mapServices from '../../../services/mapServices';
import { Marker, Tooltip, useMapEvents } from 'react-leaflet';

// LIBRARIES
import { useState, useEffect } from 'react';


function LocationMarker({ placeInfo }) {
    const { id, name, categories, lat, lng } = placeInfo;
    const [popupActive, setPopupActive] = useState(false);

    const icon = mapServices.getMarkerIcon(categories.split(',')[0]);

    const map = useMapEvents({
        zoom(e) {
            if (map.getZoom() >= 16) {
                setPopupActive(true);
            } else if (map.getZoom() < 16) {
                setPopupActive(false);
            }
        }
    })

    useEffect(() => {
        if (map.getZoom() >= 16) {
            setPopupActive(true);
        }
    }, [])

    return (
        <Marker
            key={id}
            position={[lat, lng]}
            categories={categories}
            icon={icon}
        >
            {popupActive
                ? <Tooltip
                    direction="bottom"
                    permanent
                >
                    {name}
                </Tooltip>
                : null
            }
        </Marker>
    )
}

export default LocationMarker
