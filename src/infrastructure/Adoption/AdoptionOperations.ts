import AdoptionService from '@common/services/AdoptionService';

import Toast from '@common/helpers/Toast';

import { getErrorMessage } from '@common/handlers/ErrorHandler';

const AdoptionOperations = {
    getChildAdoptionRequests: (child_id: string) => async () => {
        try {
            const response = await AdoptionService.getChildAdoptionRequests(child_id);

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    getDetailAdoptionRequest: (child_id: string, person_id: string) => async () => {
        try {
            const response = await AdoptionService.getDetailAdoptionRequest(child_id, person_id);

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    getConsolidatedAdoptions: () => async () => {
        try {
            const response = await AdoptionService.getConsolidatedAdoptions();

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    getChildrenRequestedByUserLogged: () => async () => {
        try {
            const response = await AdoptionService.getChildrenRequestedByUserLogged();

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    createAdoptionRequest: (child_id: string) => async () => {
        try {
            const response = await AdoptionService.createAdoptionRequest(child_id);

            Toast.showSuccess('Solicitação de adoção criada com sucesso');

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    updateAdoptionRequestStatus: (child_id: string, person_id: string, status: string) => async () => {
        try {
            const response = await AdoptionService.updateAdoptionRequestStatus(child_id, person_id, status);

            Toast.showSuccess('Status de solicitação atualizado com sucesso');

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },

    deleteConsolidatedAdoption: (child_id: string, person_id: string) => async () => {
        try {
            const response = await AdoptionService.deleteConsolidatedAdoption(child_id, person_id);

            Toast.showSuccess('Adoção cancelada com sucesso');

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },
}

export default AdoptionOperations;
