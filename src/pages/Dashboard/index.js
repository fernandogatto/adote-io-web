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

                    <Box className="item-main"></Box>

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

                    <Box className="item-footer"></Box>
                </ContentDashboard>
            </Box>
        </ContainerDashboard>
    );
}

export default Dashboard;
