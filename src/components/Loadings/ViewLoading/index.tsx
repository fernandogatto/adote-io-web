import React from 'react';

import {
    Box,
    IconButton,
    Typography,
    Skeleton,
} from '@mui/material';

import { Replay } from '@mui/icons-material';

import { Container } from './styles';

interface IViewLoadingProps {
    isLoading: boolean;
    hasError: boolean;
    onPress: () => void;
}

const ViewLoading = ({
    isLoading,
    hasError,
    onPress
}: IViewLoadingProps): JSX.Element => {
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
                    <Box className="item-image">
                        <Skeleton variant="rectangular" width={'100%'} height={345} />
                    </Box>

                    <Box className="item-description">
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
