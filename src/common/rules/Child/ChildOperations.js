import ChildService from '../../services/ChildService';

import ChildActions from './ChildActions';

import Toast from '../../helpers/Toast';

import { getErrorMessage } from '../../handlers/ErrorHandler';

const ChildOperations = {
    getChildren: (data) => async (dispatch) => {
        dispatch(ChildActions.SetLoading());

        try {
            const response = await ChildService.getChildren(data);

            dispatch(ChildActions.SetSuccess(response.data));

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            dispatch(ChildActions.SetFailure());
        }
    },

    getChild: (id) => async () => {
        try {
            const response = await ChildService.getChild(id);

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    createChild: (data) => async () => {
        try {
            const response = await ChildService.createChild(data);

            Toast.showSuccess('Criança criada com sucesso');

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    updateChildById: (id, data) => async () => {
        try {
            const response = await ChildService.updateChildById(id, data);

            Toast.showSuccess('Criança atualizada com sucesso');

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    deleteChildById: (id) => async () => {
        try {
            const response = await ChildService.deleteChildById(id);

            Toast.showSuccess('Criança excluída com sucesso');

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },
}

export default ChildOperations;
