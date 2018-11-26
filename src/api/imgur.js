import qs from 'qs'

const CLIENT_ID = 'abe0913227269ed';
const CLIENT_SECRET = 'fbbd8e194ca86ba5dbd025234bb602192d2b3e6c';
const ROOT_URL = 'https://api.imgur.com';


export default {

    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    }

};