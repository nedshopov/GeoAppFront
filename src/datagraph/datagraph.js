import remoteDataService from "../services/remoteDataService";

export default class dataGraph {
    constructor() {
        this.remote = true;
    }
    getInRadius(categories, lat, lng, radius) {
        return this.remote ? remoteDataService.getInRadius(categories, lat, lng, radius) : undefined;
    }
}