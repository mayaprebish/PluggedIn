export default class VenueService {
    url = 'https://api.eventful.com/json/venues?app_key=4TTVttfmr3tXFDJr&location=boston';
    static instance = null;

    static getInstance() {
        if (VenueService.instance == null) {
            VenueService.instance =
                new VenueService();
        }
        return this.instance;
    }

    findVenues() {
        return fetch(this.url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        })
            // .then(response => response.json())
            // .catch(err => {
            //     console.log(err)
            //     console.log("didn't work")
            // })
    }

}
