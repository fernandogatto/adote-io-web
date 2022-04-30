import React from 'react';

import {
    Box,
    IconButton,
    Typography,
    Skeleton,
} from '@mui/material';

import { Replay } from '@mui/icons-material';

import { Container } from './styles';

interface IFormLoadingProps {
    isLoading: boolean;
    hasError: boolean;
    onPress: () => void;
}

const FormLoading = ({
    isLoading,
    hasError,
    onPress
}: IFormLoadingProps): JSX.Element => {
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
                                <Skeleton animation="wave" variant="rectangular" className="skeleton" />
                            </Box>

                            <Box className="input">
                                <Skeleton animation="wave" variant="rectangular" className="skeleton" />
                            </Box>

                            <Box className="input">
                                <Skeleton animation="wave" variant="rectangular" className="skeleton" />
                            </Box>
                        </Box>

                        <Box className="item-flex">
                            <Box className="input">
                                <Skeleton animation="wave" variant="rectangular" className="skeleton" />
                            </Box>

                            <Box className="input">
                                <Skeleton animation="wave" variant="rectangular" className="skeleton" />
                            </Box>

                            <Box className="input">
                                <Skeleton animation="wave" variant="rectangular" className="skeleton" />
                            </Box>
                        </Box>
                    </Box>

                    <Box className="grid-button">
                        <Skeleton
                            animation="wave"
                            variant="rectangular"
                            className="skeleton"
                        />
                    </Box>
                </>
            )}
        </Container>
    )
}

export default FormLoading;
