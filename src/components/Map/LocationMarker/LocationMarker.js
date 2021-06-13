// SERVICES
import mapServices from '../../../services/mapServices';

//LIBRARIES
import { Marker, Tooltip } from 'react-leaflet';

function LocationMarker({ placeInfo }) {
    const { id, name, categories, lat, lng } = placeInfo;

    const icon = mapServices.getMarkerIcon(categories.split(',')[0]);

    return (
        <Marker
            key={id}
            position={[lat, lng]}
            categories={categories}
            icon={icon}
        >
            <Tooltip
                direction="bottom"
            >
                {name}
            </Tooltip>
        </Marker>
    )
}

export default LocationMarker
