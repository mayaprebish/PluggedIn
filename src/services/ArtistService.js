export default class ArtistService {
    url = 'https://webdev-team-15-server.herokuapp.com/api/users/';
    static instance = null;

    static getInstance() {
        if (ArtistService.instance == null) {
            ArtistService.instance =
                new ArtistService();
        }
        return this.instance;
    }

    findAllArtistsForManager = managerId =>
      fetch(`https://webdev-team-15-server.herokuapp.com/api/users/managers/${managerId}/artists`)
        .then(response => response.json());

    findAllArtists = () =>
      fetch(`https://webdev-team-15-server.herokuapp.com/api/artists`)
      .then(response => response.json());

    findArtistById = (artistId) =>
      fetch(`https://webdev-team-15-server.herokuapp.com/api/artists/${artistId}`)
      .then(response => response.json());
}
