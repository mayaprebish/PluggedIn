export default class VenueService {
    // url = 'https://webdev-team-15-server.herokuapp.com/api/venues';
    url = 'http://localhost:8080/api/venues';
    static instance = null;

    static getInstance() {
        if (VenueService.instance == null) {
            VenueService.instance =
                new VenueService();
        }
        return this.instance;
    }

    findVenues(searchPhrase) {
      console.log(searchPhrase)
        return fetch(this.url + "/search" + `/${searchPhrase}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        })
            .then(response => response.json());
    }

    getVenue(venueId) {
      console.log(venueId)
      return fetch(this.url + `/${venueId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Credentials': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        }
      })
          .then(response => response.json());
    }

}
