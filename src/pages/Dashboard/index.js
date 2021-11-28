import React from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
    Box,
} from '@mui/material';

import Menu from '../../components/Menu';

import {
    ContainerDashboard,
    ContentDashboard,
    ItemCard,
} from './styles';

const Dashboard = () => {
    return (
        <ContainerDashboard>
            <Menu />

            <Box className="container-page">

            </Box>
        </ContainerDashboard>
    );
}

export default Dashboard;
