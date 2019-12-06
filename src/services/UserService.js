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

    addNewUser = (username, password, type) => {
        /*
        If type is manager, add new manager to server
        If type is owner, add new owner
         */
    };

    findUserByCredentials = (username, password) => {
        return fetch(this.url + username + "/" + password, {
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
            .then(user => {
                this.state.user = user;
            })
    }

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
