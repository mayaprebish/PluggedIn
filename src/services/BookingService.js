export default class BookingService {
    url = 'https://webdev-team-15-server.herokuapp.com/api/users/';
    static instance = null;

    static getInstance() {
        if (BookingService.instance == null) {
            BookingService.instance =
                new BookingService();
        }
        return this.instance;
    }

    findAllBookingsForOwner = ownerId =>
        fetch(`https://webdev-team-15-server.herokuapp.com/api/users/owners/${ownerId}/bookings`)
            .then(response => response.json());

    findAllBookingsForTour = tourId =>
        fetch(`https://webdev-team-15-server.herokuapp.com/api/tours/${tourId}/bookings`)
            .then(response => response.json());

    findAllBookingsForVenue = venueId =>
        fetch(`https://webdev-team-15-server.herokuapp.com/api/venues/${venueId}/bookings`)
            .then(response => response.json());


    findAllBookingsForArtist = artistId =>
        fetch(`https://webdev-team-15-server.herokuapp.com/api/artists/${artistId}/bookings`)
            .then(response => response.json());

    findAllBookings = () =>
        fetch(`https://webdev-team-15-server.herokuapp.com/api/bookings`)
            .then(response => response.json());

    findBookingById = (bookingId) =>
        fetch(`https://webdev-team-15-server.herokuapp.com/api/bookings/${bookingId}`)
            .then(response => response.json());

}
