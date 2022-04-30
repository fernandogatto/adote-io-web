export interface IAuthData {
    email: string;
    senha: string;
}

export interface ILoggedUser {
    email: string;
    perfil: string;
    nome: string;
    usuario_id: string;
}

export interface IAuthState {
    Data: ILoggedUser | {};
    IsLoading: boolean;
    HasError: boolean;
}
