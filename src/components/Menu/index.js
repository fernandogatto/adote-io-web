import React, { useEffect, useState } from 'react';

import { NavLink, useHistory } from 'react-router-dom';

import {
    Box,
    Drawer,
    IconButton,
    Button,
} from '@material-ui/core';

import {
    Timeline,
    Person,
    ExitToApp,
    Menu as MenuIcon,
    Close,
} from '@material-ui/icons';

import { MenuContainer } from './styles';

import LoadingMenu from '../../components/Loadings/LoadingMenu';

import logo from '../../assets/logo.png';

import { useAuth } from '../../common/contexts/Auth';

const Menu = () => {
    const history = useHistory();

    const { isLoadingUser, hasErrorUser, user, getUser, signOut } = useAuth();

    const [mobileView, setMobileView] = useState(false);

    const [menuIsOpen, setMenuIsOpen] = useState(false);

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
                            to="/status-do-alistamento"
                            activeClassName="active"
                        >
                            <Timeline />
                            Status do Alistamento
                        </NavLink>

                        {user.roles &&
                            user.roles.length > 0 &&
                            user.roles.includes('SERVIDOR') && (
                                <NavLink
                                    to="/pessoas-fisicas"
                                    activeClassName="active"
                                >
                                    <Person />
                                    Pessoas Físicas
                                </NavLink>
                        )}
                    </nav>
            )}

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
                    alt="Logo eMilitar"
                />
            </Box>

            <LoadingMenu
                isLoading={isLoadingUser}
                hasError={hasErrorUser}
                onPress={getUser}
            />

            {mobileView ? displayMobile() : displayDesktop()}
        </MenuContainer>
    )
}

export default Menu;
