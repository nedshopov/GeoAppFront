// SERVICES
import mapServices from '../../../services/mapServices';
import { Marker, Popup } from 'react-leaflet';

function LocationMarker({placeInfo}) {
    const { id, name, categories, lat, lng } = placeInfo;

    const icon = mapServices.getMarkerIcon(categories.split(',')[0]);

    return (
        <Marker
            key={id}
            position={[lat, lng]}
            categories={categories}
            icon={icon}>
            <Popup>
                {name}
            </Popup>
        </Marker>
    )
}

export default LocationMarker
