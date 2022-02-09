import ChildService from '../../services/ChildService';

import ChildActions from './ChildActions';

import Toast from '../../helpers/Toast';

import Storage from '../../constants/Storage';

import { getErrorMessage } from '../../handlers/ErrorHandler';

const ChildOperations = {
    getAllChildren: () => async () => {
        try {
            const response = await ChildService.getAllChildren();

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

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

    getLastChildren: () => async () => {
        try {
            const response = await ChildService.getLastChildren();

            const kids = response.data;

            localStorage.setItem(`@${Storage.project}:lastChild`, JSON.stringify(kids[0]));

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    getLastChild: () => async () => {
        return JSON.parse(localStorage.getItem(`@${Storage.project}:lastChild`));
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

    setNewChild: (value) => async (dispatch) => {
        dispatch(ChildActions.SetNew(value));
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

    updateChildById: (data) => async () => {
        try {
            const response = await ChildService.updateChildById(data);

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
