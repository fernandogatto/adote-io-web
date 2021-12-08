import React from 'react';

import {
    Box,
    IconButton,
    Typography,
    Skeleton,
} from '@mui/material';

import { Replay } from '@mui/icons-material';

import { Container } from './styles';

const ViewLoading = ({ isLoading, hasError, onPress }) => {
    return (
        <Container>
            {hasError && (
                <Box style={{ textAlign: 'center' }}>
                    <IconButton onClick={onPress}>
                        <Replay />
                    </IconButton>

                    <Typography variant="h6">
                        Tentar novamente
                    </Typography>
                </Box>
            )}

            {isLoading && (
                <Box className="container-info">
                    <Box className="container-image">
                        <Skeleton variant="rectangular" width={'100%'} height={345} />
                    </Box>

                    <Box className="container-description">
                        <Box className="container-title">
                            <Skeleton variant="rectangular" width={200} height={30} />
                        </Box>

                        <Box className="container-registry">
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                        </Box>
                    </Box>
                </Box>
            )}
        </Container>
    );
}

export default ViewLoading;
