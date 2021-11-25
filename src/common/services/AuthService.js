import Api from '../helpers/Api';

class AuthService {
    createAuth(data) {
        return Api.post(`/auth`, data);
    }
}

export default new AuthService();
