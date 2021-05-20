import L from 'leaflet'

function getMarkerIcon(category) {
    let myIcon = L.icon({
        iconUrl: `mapicons/${category}.png`,
        // iconSize: [38, 95],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42],
    });
    console.log(myIcon);
    return myIcon;
}

const funcs = {
    getMarkerIcon
}

export default funcs;