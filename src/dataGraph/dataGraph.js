import remoteDataService from "../services/remoteDataService";

export default class dataGraph {
    constructor() {
        this.remote = true;
        this.cache = {};
    }
    async getInRadius(categories, lat, lng, radius, debouncedRadius) {

        const getData = async () => {
            return this.remote
                ? remoteDataService.getInRadius(categories, lat, lng, debouncedRadius)
                : [];
        }

        const filterByRadius = (data) => {
            return data.data[0].filter(x => x.Distance < radius) ?? []
        }

        const requestKey = `${categories.join()}${lat}${lng}`;
        if (!this.cache[requestKey] || this.cache[requestKey]?.radius < debouncedRadius) {
            this.cache[requestKey] = { radius, data: await getData() }
        }

        return filterByRadius(this.cache[requestKey].data);
    }
}