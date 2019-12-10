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

    findAllArtistsForManager = managerId =>
      fetch(`http://localhost:8080/api/users/managers/${managerId}/artists`)
        .then(response => response.json());

    findAllArtists = () =>
      fetch(`http://localhost:8080/api/artists`)
      .then(response => response.json());

    findArtistById = (artistId) =>
      fetch(`http://localhost:8080/api/artists/${artistId}`)
      .then(response => response.json());
}
