import React, { useEffect, useState } from 'react';

import { NavLink, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
    Box,
    Drawer,
    IconButton,
    Button,
    Tooltip,
} from '@mui/material';

import {
    Dashboard,
    Ballot,
    // HourglassFull,
    QuestionMark,
    Forum,
    ExitToApp,
    Menu as MenuIcon,
    Close,
    Search,
} from '@mui/icons-material';

import MenuLoading from '../Loadings/MenuLoading';

import SearchDialog from '../Dialogs/SearchDialog';

import logo from '../../assets/logo.png';

import { useAuth } from '../../common/contexts/Auth';

import ChildOperations from '../../common/rules/Child/ChildOperations';

import { MenuContainer } from './styles';

const Menu = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const { isLoadingUser, hasErrorUser, user, getUser, signOut } = useAuth();

    const [mobileView, setMobileView] = useState(false);

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const [searchDialogIsOpen, setSearchDialogIsOpen] = useState(false);

    const [kids, setKids] = useState([]);

    useEffect(() => {
        getKids();
    }, []);

    const getKids = async () => {
        try {
            const search = {
                nome: '',
                genero: '',
                idadeMinima: '',
                idadeMaxima: '',
                localizacao: '',
            };

            const response = await dispatch(ChildOperations.getChildren(search));

            setKids(response);
        } catch (err) {
            console.log('getKids - Menu', err);
        }
    }

    const handleSubmitSearch = (data) => {
        dispatch(ChildOperations.getChildren(data));

        setSearchDialogIsOpen(false);

        history.push('/adoption');
    }

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth <= 768
                ? setMobileView(true)
                : setMobileView(false);
        }

        setResponsiveness();

        window.addEventListener('resize', () => setResponsiveness());

        return () => {
            window.removeEventListener('resize', () => setResponsiveness());
        };
    }, []);

    const handleSignOut = () => {
        signOut();

        history.push('/');
    }

    const navBar = (
        <>
            {mobileView && (
                <IconButton
                    aria-label="Fechar"
                    aria-haspopup={false}
                    edge="end"
                    onClick={() => setMenuIsOpen(false)}
                >
                    <Close />
                </IconButton>
            )}

            {!isLoadingUser &&
                !hasErrorUser &&
                user &&
                user.usuario_id !== '' && (
                    <nav>
                        <NavLink
                            to="/dashboard"
                            activeClassName="active"
                        >
                            <Dashboard />
                            Início
                        </NavLink>

                        <NavLink
                            to="/adoption"
                            activeClassName="active"
                        >
                            <Ballot />
                            Adoção
                        </NavLink>

                        {/* <NavLink
                            to="/adoption-requests"
                            activeClassName="active"
                        >
                            <HourglassFull />
                            Pedidos
                        </NavLink> */}

                        <NavLink
                            to="/questions"
                            activeClassName="active"
                        >
                            <QuestionMark />
                            Dúvidas
                        </NavLink>

                        <NavLink
                            to="/depositions"
                            activeClassName="active"
                        >
                            <Forum />
                            Depoimentos
                        </NavLink>
                    </nav>
            )}

            <Box className="container-search">
                <Box className="container-flex">
                    <h4>Buscar</h4>

                    <Tooltip title="Buscar" arrow>
                        <IconButton
                            aria-label="Buscar"
                            size="small"
                            onClick={() => setSearchDialogIsOpen(true)}
                        >
                            <Search />
                        </IconButton>
                    </Tooltip>
                </Box>

                <p>Faça uma busca personalizada com o perfil de criança desejado.</p>
            </Box>

            <Button
                startIcon={<ExitToApp />}
                color="primary"
                fullWidth
                onClick={handleSignOut}
                className="logoff"
            >
                Sair
            </Button>
        </>
    )

    const displayDesktop = () => {
        return navBar;
    }

    const displayMobile = () => {
        return menuIsOpen && (
            <Drawer
                anchor="left"
                open={menuIsOpen}
                onClose={() => setMenuIsOpen(false)}
            >
                {navBar}
            </Drawer>
        );
    }

    return (
        <MenuContainer>
            <SearchDialog
                dialogOpen={searchDialogIsOpen}
                handleCloseDialog={() => {
                    setSearchDialogIsOpen(false);
                }}
                handleConfirmAction={handleSubmitSearch}
                items={kids}
                title="Buscar"
                confirm="Confirmar"
            />

            <Box className="container-logo">
                {mobileView && (
                    <IconButton
                        aria-label="Menu"
                        aria-haspopup={true}
                        edge="start"
                        onClick={() => setMenuIsOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                <img
                    src={logo}
                    alt="Logo"
                />
            </Box>

            <MenuLoading
                isLoading={isLoadingUser}
                hasError={hasErrorUser}
                onPress={getUser}
            />

            {mobileView ? displayMobile() : displayDesktop()}
        </MenuContainer>
    )
}

export default Menu;
