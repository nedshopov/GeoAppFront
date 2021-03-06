// LIBRARIES
import { useEffect, useState, useMemo } from 'react';
import debounce from 'lodash/debounce';

// SERVICES
import DataGraph from '../../dataGraph/dataGraph';

// COMPONENTS
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import CurrentLocationMarker from './CurrentLocationMarker/CurrentLocationMarker';
import RadiusSlider from './RadiusSlider/RadiusSlider';
import CheckboxesContainer from './CheckboxesContainer/CheckboxesContainer';
import LocationMarkersContainer from './LocationMarkersContainer/LocationMarkersContainer';

const defaultLat = 42.765833;
const defaultLng = 25.238611;

const dataGraph = new DataGraph();

function Map() {
    const [fetchedPlaces, setFetchedPlaces] = useState([]); // Set places after fetching
    const [currentLocation, setCurrentLocation] = useState(null); // Set current location if allowed by user
    const [radius, setRadius] = useState(1); // Set the raidus
    const [categories, setCategories] = useState([]); // Set the categories to fetch
    const [debouncedRadius, setDebouncedRadius] = useState(1); // Set the debounced final radius to fetch

    const debounceRadiusHandler = useMemo(() =>
        debounce((radius) =>
            setDebouncedRadius(radius)
            , 1000), []);

    useEffect(() => {
        if (currentLocation !== null) {
            dataGraph
                .getInRadius(
                    categories,
                    currentLocation.lat,
                    currentLocation.lng,
                    radius,
                    debouncedRadius
                )
                .then(res => {
                    setFetchedPlaces(res);
                })
                .catch(err => console.log(err))
        }

    }, [currentLocation, radius, debouncedRadius, categories])

    return (
        <>
            <MapContainer
                center={[defaultLat, defaultLng]}
                zoom={8}
                scrollWheelZoom={true}
                doubleClickZoom={false}
            >
                <LayersControl>
                    <LayersControl.BaseLayer checked position="topright" name="Base Map">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer
                        position="topright"
                        name="Satellite Map">
                        <TileLayer
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                            maxZoom={17}
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer
                        position="topright"
                        name="Topographic Map">
                        <TileLayer
                            attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                            maxZoom={17}
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>

                <LocationMarkersContainer fetchedPlaces={fetchedPlaces} />

                <CurrentLocationMarker getCurrentLocationHandler={setCurrentLocation} radius={radius} />

            </MapContainer>

            <RadiusSlider debounceRadiusHandler={debounceRadiusHandler} getRadiusHandler={setRadius} />

            <CheckboxesContainer getCategoriesHandler={setCategories} removeCategoriesHandler={setCategories} />
        </>
    );
}

export default Map;
