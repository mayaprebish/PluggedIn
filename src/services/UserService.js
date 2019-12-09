export default class UserService {
    url = 'http://localhost:8080/api/users/';
    static instance = null;

    static getInstance() {
        if (UserService.instance == null) {
            UserService.instance =
                new UserService();
        }
        return this.instance;
    }

    login = (username, password, userType) => {
        return fetch(this.url + '/' + `${username}` + '/' + `${password}` + '/' + `${userType}`, {
            method: 'GET',
            headers: {
                'content-type':'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Origin':true
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    register = (username, password, firstName, lastName, userType) => {
        return fetch('http://localhost:8080/api/user', {
            method: 'POST',
            headers: {
                'content-type':'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Origin':true
            },
            body: {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                userType: userType
            }
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    };

    findAllManagers() {
        return fetch(this.url + 'managers', {
            method: 'GET',
            headers: {
                'content-type':'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Origin':true
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
                'content-type':'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Origin':true
            }
        })
            .then(response => response.json())
            .catch(err => {
                console.log(err)
            })
    }
}
