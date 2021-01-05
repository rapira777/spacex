export default class FetchData {
    
    // https://github.com/r-spacex/SpaceX-API
    // https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/README.md

    startUrl = 'https://api.spacexdata.com/v4/';

    getResource = async (url) => {
        const res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Произошла ошибка! ${res.status}`);
        }
        return await res.json();
    };

    getRocket = async () => await this.getResource(this.startUrl+'rockets');
    
    getLaunches = async () =>  await this.getResource(this.startUrl+'launches/past');

    getCompany = async () =>  await this.getResource(this.startUrl+'company');
}