export default class UserService {
    url = 'https://webdev-team-15-server.herokuapp.com/api/users/';
    static instance = null;

    static getInstance() {
        if (UserService.instance == null) {
            UserService.instance =
                new UserService();
        }
        return this.instance;
    }

    login = (username, password) => {
        return fetch(this.url + '/' + `${username}` + '/' + `${password}`, {
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
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Origin':"*",
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
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Origin':"*",
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
