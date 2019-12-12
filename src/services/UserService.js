export default class UserService {
    url = 'https://webdev-team-15-server.herokuapp.com/api/users/';
    // url = 'http://localhost:8080/api/users/';
    static instance = null;

    static getInstance() {
        if (UserService.instance == null) {
            UserService.instance =
                new UserService();
        }
        return this.instance;
    }

    findUserById = (userId, uType) =>
        fetch(this.url + `${uType}s` + '/' + `${userId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err));

    login = (username, password) => {
        return fetch(this.url + `${username}` + '/' + `${password}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    };

    register = (username, password, firstName, lastName, userType) => {
        let utype;
        if (userType === "Tour Manager") {
            utype = "manager"
        }
        if (userType === "Venue Owner") {
            utype = "owner"
        }
        return fetch(this.url + utype, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            },
            body: JSON.stringify({
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    };

    createArtist = (managerId, name, location, genre) =>
        fetch(this.url + `managers/${managerId}/artist`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                location: location,
                genre: genre
            }),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "*"
            }
        })
            .then(response => response.json());

    deleteArtist = (managerId, artistId) =>
        fetch(this.url + `managers/${managerId}/artists/${artistId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "*"
            }
        })
            .then(response => response.json());

    createVenue = (ownerId, venueId, name, location) =>
        fetch(this.url + `owners/${ownerId}/venue`, {
            method: 'POST',
            body: JSON.stringify({
                stringKey: venueId,
                name: name,
                location: location,
            }),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "*"
            }
        })
            .then(response => response.json());

    deleteVenue = (ownerId, venueId) =>
        fetch(this.url + `owners/${ownerId}/venues/${venueId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "*"
            }
        })
            .then(response => response.json());

    createBooking = (managerId, artistId, tourId, venueKey, date) =>
        fetch(this.url + `managers/${managerId}/tours/${tourId}/artists/${artistId}/venues/${venueKey}/booking`, {
            method: 'POST',
            body: JSON.stringify({
                date: date
            }),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "*"
            }
        })
            .then(response => response.json());

    createTour = (managerId, tourName) =>
        fetch(this.url + `managers/${managerId}/tour`, {
            method: 'POST',
            body: JSON.stringify({
                title: tourName
            }),
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "*"
            }
        })
            .then(response => response.json());

    deleteTour = (managerId, tourId) =>
        fetch(this.url + `managers/${managerId}/tours/${tourId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "*"
            }
        })
            .then(response => response.json());

    findAllManagers() {
        return fetch(this.url + 'managers', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(response => response.json())
            .catch(err => {
                console.log(err)
            })
    }

    findAllOwners() {
        return fetch(this.url + 'owners', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': true
            }
        })
            .then(response => response.json())
            .catch(err => {
                console.log(err)
            })
    }
}
