import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
    Box,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';

import { MoreVert } from '@mui/icons-material';

import { ContainerSidebarBox } from './styles';

import SidebarLoading from '../Loadings/SidebarLoading';

const SidebarBox = ({ title, linkDomain, array, isLoading, hasError, onPress }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <ContainerSidebarBox>
            <Box className="container-title">
                <h2>{title}</h2>
            </Box>

            <Box className="container-content">
                <SidebarLoading
                    rows={2}
                    isLoading={isLoading}
                    hasError={hasError}
                    onPress={onPress}
                />

                {!isLoading && !hasError && array && array.length === 0 && (
                    <p>Nenhum resultado encontrado</p>
                )}

                {!isLoading && !hasError && array && array.length > 0 && array.map((item, index) => (
                    <Box className="item-box" key={index}>
                        <Box style={{ display: 'flex' }}>
                            <img
                                src={item.url}
                                alt={item.nome}
                                className="avatar"
                            />

                            <Box>
                                <h3>{item.nome}</h3>

                                <p>{item.estabelecimento}</p>
                            </Box>
                        </Box>

                        <Box>
                            <IconButton
                                aria-label="Ver mais"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVert />
                            </IconButton>
                        </Box>

                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    width: '80px',
                                },
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to={`${linkDomain}/${item.id}`}>
                                    Ver
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                ))}
            </Box>
        </ContainerSidebarBox>
    )
}

export default SidebarBox;
