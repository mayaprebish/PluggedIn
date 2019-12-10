export default class ArtistService {
    url = 'http://localhost:8080/api/users/';
    static instance = null;

    static getInstance() {
        if (ArtistService.instance == null) {
            ArtistService.instance =
                new ArtistService();
        }
        return this.instance;
    }

    createArtistForManager = (managerId, artist) =>
      fetch(`http://localhost:8080/api/users/managers/${managerId}/artists`, {
        method: 'POST',
        body: JSON.stringify(artist),
        headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Origin':"*",
        'Access-Control-Allow-Headers': "*"
      }
    })
    .then(response => response.json());

    findAllArtistsForManager = managerId =>
      fetch(`http://localhost:8080/api/users/managers/${managerId}/artists`)
        .then(response => response.json());

    findAllArtists = () =>
      fetch(`http://localhost:8080/api/artists`)
      .then(response => response.json());

    findArtistById = (artistId) =>
      fetch(`http://localhost:8080/api/artists/${artistId}`)
      .then(response => response.json());

    updateArtist = (artistId, artist) =>
      fetch(`http://localhost:8080/api/artists/${artistId}`, {
        method: 'PUT',
        body: JSON.stringify(artist),
        headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Origin':"*",
        'Access-Control-Allow-Headers': "*"
        }
      })

      deleteArtist = (artistId) =>
      fetch(`http://localhost:8080/api/artists/${artistId}`, {
        method: 'DELETE'
      })
      .then(response => response.json());


}
