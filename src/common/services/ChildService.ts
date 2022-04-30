import Api from '../helpers/Api';

class ChildService {
    getAllChildren() {
        return Api.get(`/criancas`);
    }

    getChildren({ nome, genero, idadeMinima, idadeMaxima, localizacao }: any) {
        return Api.get(`/criancas/pesquisa?nome=${nome}&genero=${genero}&idadeMinima=${idadeMinima}&idadeMaxima=${idadeMaxima}&localizacao=${localizacao}`);
    }

    getLastChildren() {
        return Api.get(`/criancas/ultimas`);
    }

    getChild(id: string) {
        return Api.get(`/criancas/${id}`);
    }

    createChild(data: any) {
        return Api.post(`/criancas`, data);
    }

    updateChildById(data: any) {
        return Api.put(`/criancas`, data);
    }

    deleteChildById(id: string) {
        return Api.delete(`/criancas/${id}`);
    }
}

export default new ChildService();
