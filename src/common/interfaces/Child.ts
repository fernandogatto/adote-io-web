interface IConteudoProps {
    tipo: string;
    link: string;
}

export interface IChildProps {
    id?: string;
    nome: string;
    localizacao: string;
    genero: string;
    saude: string;
    dataNascimento: Date;
    recemNascido: boolean;
    conteudos: Array<IConteudoProps>;
    irmaosASeremCadastrados: any;
}

export interface IChildState {
    Data: Array<IChildProps>;
    IsLoading: boolean;
    HasError: boolean;
    NewChild: boolean;
}
