import React from 'react';

import {
    Box,
    IconButton,
    Typography,
} from '@material-ui/core';

import { Replay } from '@material-ui/icons';

import { Skeleton } from '@material-ui/lab';

import { Container } from './styles';

const LoadingCard = ({ isLoading, hasError, onPress, rows }) => {
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
                [...Array(rows)].map((element, index) => (
                    <Box key={index} className="container-box">
                        <Skeleton
                            type="rect"
                            height={32}
                            width={120}
                            style={{marginBottom: 16}}
                        />
                        <Skeleton
                            type="rect"
                            width={250}
                            style={{marginBottom: 4}}
                        />
                        <Skeleton
                            type="rect"
                            width={250}
                            style={{marginBottom: 4}}
                        />
                    </Box>
                ))
            )}
        </Container>
    )
}

export default LoadingCard;
