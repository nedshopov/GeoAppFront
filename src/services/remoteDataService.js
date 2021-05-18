import axios from 'axios';

const baseURL = 'https://nedshopov.com/geoapi/';
const headers = {
    "Content-Type": "text/plain"
};

function getAll() {
    return axios
        .get(baseURL + `objects/all`);
}

function getInRadius(categories, lat, lng, radius) {
    categories = categories.join(`,`);
    return axios
        .get(baseURL + `filter`, {
            params: {
                categories,
                lat,
                lng,
                radius
            }
        },
            { headers });
}

const remoteDataService = {
    getAll,
    getInRadius
};

export default remoteDataService;