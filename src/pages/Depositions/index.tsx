import React from 'react';

import {
    Box,
} from '@mui/material';

import Menu from '@components/Menu';

import {
    ContainerDepositions,
    ContentDepositions,
} from './styles';

const Depositions = () => {
    const depoimentos = [
        {
            nome: 'Augusto Jones Nascimento',
            depoimento: 'Adorei a forma como fui atendido. O processo de adoção foi rápido e todos foram atenciosos comigo.',
        },
        {
            nome: 'Ana Müller Hoffmann',
            depoimento: 'Adotei dois irmãos e hoje posso dizer que tenho uma família. Agradeço muito a ajuda de todos os envolvidos.',
        }
    ];

    return (
        <ContainerDepositions>
            <Menu />

            <Box className="container-page">
                <ContentDepositions>
                    <Box className="container-header-page">
                        <h1>Depoimentos</h1>
                    </Box>

                    <Box>
                        {depoimentos && depoimentos.length === 0 && (
                            <p>Nenhum resultado encontrado</p>
                        )}

                        {depoimentos && depoimentos.length > 0 && depoimentos.map(item => (
                            <Box className="container-item">
                                <Box className="container-name">
                                    <strong>{item.nome}</strong>
                                </Box>

                                <p>{item.depoimento}</p>
                            </Box>
                        ))}
                    </Box>
                </ContentDepositions>
            </Box>
        </ContainerDepositions>
    );
}

export default Depositions;
