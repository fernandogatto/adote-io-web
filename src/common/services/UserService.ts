import Api from '../helpers/Api';

class UserService {
    createUser(data: any) {
        return Api.post(`/pessoas`, data);
    }
}

export default new UserService();
