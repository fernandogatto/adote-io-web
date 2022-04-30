import Api from '../helpers/Api';

class AdoptionService {
    getChildAdoptionRequests(child_id: string) {
        return Api.get(`/adocoes/criancas/${child_id}`);
    }

    getDetailAdoptionRequest(child_id: string, person_id: string) {
        return Api.get(`/adocoes/criancas/${child_id}/pessoas/${person_id}`);
    }

    getConsolidatedAdoptions() {
        return Api.get(`/adocoes/consolidadas`);
    }

    getChildrenRequestedByUserLogged() {
        return Api.get(`/adocoes`);
    }

    createAdoptionRequest(child_id: string) {
        return Api.post(`/adocoes/criancas/${child_id}`);
    }

    updateAdoptionRequestStatus(child_id: string, person_id: string, status: string) {
        return Api.patch(`/adocoes/criancas/${child_id}/pessoas/${person_id}/status/${status}`);
    }

    deleteConsolidatedAdoption(child_id: string, person_id: string) {
        return Api.delete(`/adocoes/consolidadas/criancas/${child_id}/pessoa/${person_id}`);
    }
}

export default new AdoptionService();
