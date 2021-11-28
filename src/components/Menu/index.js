import React, { useEffect, useState } from 'react';

import { NavLink, useHistory } from 'react-router-dom';

import {
    Box,
    Drawer,
    IconButton,
    Button,
    Tooltip,
} from '@mui/material';

import {
    Dashboard,
    Person,
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

import { MenuContainer } from './styles';

const Menu = () => {
    const history = useHistory();

    const { isLoadingUser, hasErrorUser, user, getUser, signOut } = useAuth();

    const [mobileView, setMobileView] = useState(false);

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const [searchDialogIsOpen, setSearchDialogIsOpen] = useState(false);

    const [kids, setKids] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setKids([
            {
                id: 1,
                nome: 'Beatriz Laranja',
            },
            {
                id: 2,
                nome: 'Carlos Alexandre Pereira',
            },
        ]);
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

            {/* {!isLoadingUser &&
                !hasErrorUser &&
                user &&
                user.usuario_id !== '' && ( */}
                    <nav>
                        <NavLink
                            to="/dashboard"
                            activeClassName="active"
                        >
                            <Dashboard />
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/adoption"
                            activeClassName="active"
                        >
                            <Person />
                            Adoção
                        </NavLink>

                        <NavLink
                            to="/adoption"
                            activeClassName="active"
                        >
                            <QuestionMark />
                            Dúvidas
                        </NavLink>

                        <NavLink
                            to="/adoption"
                            activeClassName="active"
                        >
                            <Forum />
                            Depoimentos
                        </NavLink>
                    </nav>
            {/* )} */}

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
                handleConfirmAction={() => {
                    setSearchDialogIsOpen(false);
                }}
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

            {/* <MenuLoading
                isLoading={isLoadingUser}
                hasError={hasErrorUser}
                onPress={getUser}
            /> */}

            {mobileView ? displayMobile() : displayDesktop()}
        </MenuContainer>
    )
}

export default Menu;
