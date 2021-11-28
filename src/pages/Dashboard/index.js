import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
    Box,
} from '@mui/material';

import { useAuth } from '../../common/contexts/Auth';

import Menu from '../../components/Menu';

import SidebarBox from '../../components/SidebarBox'

import {
    ContainerDashboard,
    ContentDashboard,
    ItemCard,
} from './styles';

const Dashboard = () => {
    const dispatch = useDispatch();

    const { user } = useAuth();

    const [kids, setKids] = useState([]);

    const [isLoadingKids, setIsLoadingKids] = useState(true);

    const [hasErrorKids, setHasErrorKids] = useState(false);

    useEffect(() => {
        getKids();
    }, []);

    const getKids = () => {

    }

    return (
        <ContainerDashboard>
            <Menu />

            <Box className="container-page">
                <ContentDashboard className="container-grid-area">
                    <Box className="item-header">
                        <h1>Olá, {user.nome}</h1>
                    </Box>

                    <Box className="item-main">
                        <Box className="container-section">
                            <Box className="container-title">
                                <h3>Objetivo</h3>
                            </Box>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum et purus in interdum. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nulla at leo ultricies lobortis. Pellentesque ac malesuada orci. Nulla non nunc enim. Vestibulum imperdiet vitae orci vitae bibendum. In sit amet commodo orci, non consequat dolor. Nullam consectetur eros in hendrerit aliquet. Donec viverra, augue commodo mollis varius, quam mi tempus felis, eu suscipit dolor dolor aliquam tortor. Donec eget rutrum purus, a scelerisque urna. Nulla consectetur varius quam vitae tempus. Suspendisse dignissim leo a lacus pulvinar tincidunt. Praesent tempus velit quis feugiat viverra. Maecenas sit amet arcu lacus.</p>
                        </Box>

                        <Box className="container-section">
                            <Box className="container-title">
                                <h3>Sobre</h3>
                            </Box>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum et purus in interdum. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nulla at leo ultricies lobortis. Pellentesque ac malesuada orci. Nulla non nunc enim. Vestibulum imperdiet vitae orci vitae bibendum. In sit amet commodo orci, non consequat dolor. Nullam consectetur eros in hendrerit aliquet. Donec viverra, augue commodo mollis varius, quam mi tempus felis, eu suscipit dolor dolor aliquam tortor. Donec eget rutrum purus, a scelerisque urna. Nulla consectetur varius quam vitae tempus. Suspendisse dignissim leo a lacus pulvinar tincidunt. Praesent tempus velit quis feugiat viverra. Maecenas sit amet arcu lacus.</p>
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
                            <Box className="container-title">
                                <h3>Depoimentos</h3>

                                <Link to="/depositions">
                                    Ver mais
                                </Link>
                            </Box>

                            <p>Lorem</p>
                        </Box>

                        <Box className="container-section">
                            <Box className="container-title">
                                <h3>Contato</h3>
                            </Box>

                            <p>Telefone</p>
                        </Box>
                    </Box>
                </ContentDashboard>
            </Box>
        </ContainerDashboard>
    );
}

export default Dashboard;
