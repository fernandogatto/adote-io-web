import Api from '../helpers/Api';

class AdoptionService {
    getChildAdoptionRequests(child_id) {
        return Api.get(`/adocoes/criancas/${child_id}`);
    }

    getDetailAdoptionRequest(child_id, person_id) {
        return Api.get(`/adocoes/criancas/${child_id}/pessoas/${person_id}`);
    }

    getConsolidatedAdoptions() {
        return Api.get(`/adocoes/consolidadas`);
    }

    createAdoptionRequest(child_id) {
        return Api.post(`/adocoes/criancas/${child_id}`);
    }

    updateAdoptionRequestStatus(child_id, person_id, status) {
        return Api.put(`/adocoes/criancas/${child_id}/pessoas/${person_id}/status/${status}`);
    }

    deleteConsolidatedAdoption(child_id, person_id) {
        return Api.delete(`/adocoes/consolidadas/criancas/${child_id}/pessoa/${person_id}`);
    }
}

export default new AdoptionService();
