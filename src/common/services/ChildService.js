import Api from '../helpers/Api';

class ChildService {
    getChildren({ nome, genero, idadeMinima, idadeMaxima, localizacao }) {
        return Api.get(`/criancas/pesquisa?nome=${nome}&genero=${genero}&idadeMinima=${idadeMinima}&idadeMaxima=${idadeMaxima}&localizacao=${localizacao}`);
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
