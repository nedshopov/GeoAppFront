import axios from 'axios';

const baseURL = 'https://nedshopov.com/geoapi/';

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
        });
}

const remoteDataService = {
    getAll,
    getInRadius
};

export default remoteDataService;