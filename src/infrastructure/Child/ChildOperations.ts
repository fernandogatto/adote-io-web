import ChildService from '@common/services/ChildService';

import ChildActions from './ChildActions';

import Toast from '@common/helpers/Toast';

import Storage from '@common/constants/Storage';

import { getErrorMessage } from '@common/handlers/ErrorHandler';

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

    getChildren: (data: any) => async (dispatch: any) => {
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
        return JSON.parse(localStorage.getItem(`@${Storage.project}:lastChild`) || '{}');
    },

    getChild: (id: string) => async () => {
        try {
            const response = await ChildService.getChild(id);

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    setNewChild: (value: any) => async (dispatch: any) => {
        dispatch(ChildActions.SetNew(value));
    },

    createChild: (data: any) => async () => {
        try {
            const response = await ChildService.createChild(data);

            Toast.showSuccess('Criança criada com sucesso');

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    updateChildById: (data: any) => async () => {
        try {
            const response = await ChildService.updateChildById(data);

            Toast.showSuccess('Criança atualizada com sucesso');

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    deleteChildById: (id: string) => async () => {
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
