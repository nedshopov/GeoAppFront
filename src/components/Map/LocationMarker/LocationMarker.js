// SERVICES
import mapServices from '../../../services/mapServices';

//LIBRARIES
import { Marker, Tooltip } from 'react-leaflet';

function LocationMarker({ placeInfo, showTooltips }) {
    const { id, name, categories, lat, lng } = placeInfo;

    const icon = mapServices.getMarkerIcon(categories.split(',')[0]);

    return (
        <Marker
            key={id}
            position={[lat, lng]}
            categories={categories}
            icon={icon}
        >
            {showTooltips
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
