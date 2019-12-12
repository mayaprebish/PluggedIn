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

    findAllBookingsForTour= tourId =>
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

    createBookingForOwner = (oid, booking) =>
    fetch(`https://webdev-team-15-server-java.herokuapp.com/api/users/owners/${oid}/bookings`, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Origin':"*",
          'Access-Control-Allow-Headers': "*"
        }

      })
      .then(response => response.json());

    createBookingForTour = (tid, booking) =>
    fetch(`https://webdev-team-15-server-java.herokuapp.com/api/tours/${tid}/bookings`, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Origin':"*",
          'Access-Control-Allow-Headers': "*"
        }

      })
      .then(response => response.json());

    createBookingForVenue = (vid, booking) =>
    fetch(`https://webdev-team-15-server-java.herokuapp.com/api/venues/${vid}/bookings`, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Origin':"*",
          'Access-Control-Allow-Headers': "*"
        }

      })
      .then(response => response.json());


    createBookingForArtist = (aid, booking) =>
    fetch(`https://webdev-team-15-server-java.herokuapp.com/api/artists/${aid}/bookings`, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Credentials':true,
          'Access-Control-Allow-Origin':"*",
          'Access-Control-Allow-Headers': "*"
        }

      })
      .then(response => response.json());
}
