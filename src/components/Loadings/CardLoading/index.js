import React from 'react';

import {
    Box,
    IconButton,
    Typography,
    Skeleton,
} from '@mui/material';

import { Replay } from '@mui-ui/icons-material';

import { Container } from './styles';

const CardLoading = ({ isLoading, hasError, onPress, rows }) => {
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

export default CardLoading;
