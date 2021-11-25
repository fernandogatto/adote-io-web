export function getErrorMessage(error) {
    let message = '';

    if (error.problem && error.problem !== 'CLIENT_ERROR') {
        switch (error.problem) {
            case 'TIMEOUT_ERROR':
                message = 'O servidor não respondeu a tempo';
                break;
            case 'CONNECTION_ERROR':
                message = 'Sem conexão com a internet';
                break;
            case 'NETWORK_ERROR':
                message = 'Sem conexão com a internet';
                break;
            case 'CANCEL_ERROR':
                message = 'Requisição cancelada';
                break;
            default:
                message = 'Ocorreu um erro inesperado';
                break;
        }
    } else {
        if (error.data && error.data.Message) {
            message = error.data.Message;
        } else {
            message = 'Ocorreu um erro inesperado';
        }
    }

    return message;
}
