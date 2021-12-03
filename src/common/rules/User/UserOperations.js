import UserService from '../../services/UserService';

import Toast from '../../helpers/Toast';

import { getErrorMessage } from '../../handlers/ErrorHandler';

const UserOperations = {
    createUser: (data) => async () => {
        try {
            const response = await UserService.createUser(data);

            Toast.showSuccess('Usuário criado com sucesso');

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },
}

export default UserOperations;
