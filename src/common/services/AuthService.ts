import Api from '../helpers/Api';

import { IAuthData } from '@common/interfaces';

class AuthService {
    createAuth(data: IAuthData) {
        return Api.post(`/auth`, data);
    }
}

export default new AuthService();
