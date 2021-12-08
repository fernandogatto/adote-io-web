import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
    Box,
    Button,
} from '@mui/material';

import Menu from '../../components/Menu';

import SidebarBox from '../../components/SidebarBox'

import Slider from '../../components/Slider';

import ChildOperations from '../../common/rules/Child/ChildOperations';

import image from '../../assets/family-amico.png';

import {
    ContainerDashboard,
    ContentDashboard,
} from './styles';

const Dashboard = () => {
    const dispatch = useDispatch();

    const [kids, setKids] = useState([]);

    const [isLoadingKids, setIsLoadingKids] = useState(true);

    const [hasErrorKids, setHasErrorKids] = useState(false);

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

    useEffect(() => {
        getKids();
    }, []);

    const getKids = async () => {
        try {
            const search = {
                nome: '',
                genero: '',
                idadeMaxima: '',
                idadeMinima: '',
                localizacao: '',
            };

            setIsLoadingKids(true);

            setHasErrorKids(false);

            let response = await dispatch(ChildOperations.getChildren(search));

            response = response.slice(0, 3).map(item => item);

            setKids(response);

            setIsLoadingKids(false);
        } catch (err) {
            console.log('getKids - Dashboard', err);

            setIsLoadingKids(false);

            setHasErrorKids(true);
        }
    }

    return (
        <ContainerDashboard>
            <Menu />

            <Box className="container-page">
                <ContentDashboard className="container-grid-area">
                    <Box className="item-header">
                        <Box className="container-description">
                            <h1>Encontre uma família para chamar de sua</h1>

                            <p>Nós te ajudamos a construir o início de uma família aqui. A sua satisfação é a nossa conquista.</p>

                            <Button
                                component={Link}
                                to="/adoption-process"
                            >
                                Saiba mais
                            </Button>
                        </Box>

                        <Box className="container-image">
                            <img
                                src={image}
                                alt="Encontre uma família para chamar de sua"
                            />
                        </Box>
                    </Box>

                    <Box className="item-main">
                        <Box className="container-section">
                            <Box className="container-title">
                                <h3>Objetivo</h3>
                            </Box>

                            <p>
                                Nosso objetivo é formar novos núcleos familiares e dar novas oportunidades a todas as crianças que hoje estão em nossos abrigos.
                            </p>
                        </Box>

                        <Box className="container-section">
                            <Box className="container-title">
                                <h3>Quem somos</h3>
                            </Box>

                            <p>
                                A história da Adote.io começa nas histórias contadas por Dona Francisca da Silva, uma senhora do interior do Rio de Janeiro que começou a abrigar crianças vindas de famílias com poucas condições de sustento.
                                <br/>
                                <br/>
                                Com o passar dos anos, a chácara dela se tornou uma referência de abrigo na região. Dessa forma, os cuidados de Dona Chica foram espalhando e novos abrigos abriram na região.
                                <br/>
                                <br/>
                                Assim nasceu a Adote.io, um aglomerado de abrigos que cuidam de crianças a fim de dar uma família para elas. E nós fazemos a ponte entre você e elas.
                            </p>
                        </Box>
                    </Box>

                    <Box className="item-sidebar">
                        <SidebarBox
                            title="Adoção"
                            linkDomain="/adoption/child"
                            linkSeeMore="/adoption"
                            array={kids}
                            isLoading={isLoadingKids}
                            hasError={hasErrorKids}
                            onPress={getKids}
                        />
                    </Box>

                    <Box className="item-footer">
                        <Box className="container-section">
                            <Slider
                                title="Depoimentos"
                                array={depoimentos}
                                isLoading={false}
                                hasError={false}
                                onPress={() => {}}
                            />
                        </Box>

                        <Box className="container-section">
                            <Box className="container-title">
                                <h3>Contato</h3>
                            </Box>

                            <p>(21) 2721-8280 · (21) 2721-8180 · (21) 2721-8080</p>
                        </Box>
                    </Box>
                </ContentDashboard>
            </Box>
        </ContainerDashboard>
    );
}

export default Dashboard;
