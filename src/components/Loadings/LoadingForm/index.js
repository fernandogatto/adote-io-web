import React from 'react';

import {
    Box,
    IconButton,
    Typography,
} from '@material-ui/core';

import { Replay } from '@material-ui/icons';

import { Skeleton } from '@material-ui/lab';

import { Container } from './styles';

const LoadingForm = ({ isLoading, hasError, onPress }) => {
    return (
        <Container>
            {hasError && (
                <Box style={{ textAlign: 'center' }}>
                    <IconButton
                        onClick={onPress}
                    >
                        <Replay />
                    </IconButton>

                    <Typography variant="h6">
                        Tentar novamente
                    </Typography>
                </Box>
            )}

            {isLoading && (
                <>
                    <Box className="container-section container-flex">
                        <Box className="item-flex">
                            <Box className="input">
                                <Skeleton animation="wave" variant="rect" className="skeleton" />
                            </Box>

                            <Box className="input">
                                <Skeleton animation="wave" variant="rect" className="skeleton" />
                            </Box>

                            <Box className="input">
                                <Skeleton animation="wave" variant="rect" className="skeleton" />
                            </Box>
                        </Box>

                        <Box className="item-flex">
                            <Box className="input">
                                <Skeleton animation="wave" variant="rect" className="skeleton" />
                            </Box>

                            <Box className="input">
                                <Skeleton animation="wave" variant="rect" className="skeleton" />
                            </Box>

                            <Box className="input">
                                <Skeleton animation="wave" variant="rect" className="skeleton" />
                            </Box>
                        </Box>
                    </Box>

                    <Box className="grid-button">
                        <Skeleton
                            animation="wave"
                            variant="rect"
                            className="skeleton"
                        />
                    </Box>
                </>
            )}
        </Container>
    )
}

export default LoadingForm;
