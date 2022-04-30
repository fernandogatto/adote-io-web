import UserService from '@common/services/UserService';

import Toast from '@common/helpers/Toast';

import { getErrorMessage } from '@common/handlers/ErrorHandler';

const UserOperations = {
  createUser: (data: any) => async () => {
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
