import Api from '../helpers/Api';

class ChildService {
    getAllChildren() {
        return Api.get(`/criancas`);
    }

    getChildren({ nome, genero, idadeMinima, idadeMaxima, localizacao }) {
        return Api.get(`/criancas/pesquisa?nome=${nome}&genero=${genero}&idadeMinima=${idadeMinima}&idadeMaxima=${idadeMaxima}&localizacao=${localizacao}`);
    }

    getLastChildren() {
        return Api.get(`/criancas/ultimas`);
    }

    getChild(id) {
        return Api.get(`/criancas/${id}`);
    }

    createChild(data) {
        return Api.post(`/criancas`, data);
    }

    updateChildById(id, data) {
        return Api.put(`/criancas/${id}`, data);
    }

    deleteChildById(id) {
        return Api.delete(`/criancas/${id}`);
    }
}

export default new ChildService();
