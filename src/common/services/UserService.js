import Api from '../helpers/Api';

class UserService {
    createUser(data) {
        return Api.post(`/pessoas`, data);
    }
}

export default new UserService();
