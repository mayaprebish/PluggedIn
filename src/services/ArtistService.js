export default class ArtistService {
    url = 'https://webdev-team-15-server.herokuapp.com/api/artists/';
    static instance = null;

    static getInstance() {
        if (ArtistService.instance == null) {
            ArtistService.instance =
                new ArtistService();
        }
        return this.instance;
    }

    findArtistByID = (aid) =>
        fetch(this.url + `${aid}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "*"
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err));

}
