import React from 'react';

import {
    Box,
    IconButton,
    Typography,
} from '@material-ui/core';

import { Replay } from '@material-ui/icons';

import { Container } from './styles';

const HasErrorInput = ({ onPress, marginTop, marginBottom }) => {
    return (
        <Container>
            <Box
                className="container-has-error"
                style={{
                    marginTop: marginTop || 16,
                    marginBottom: marginBottom || 16,
                }}
            >
                <IconButton
                    onClick={onPress}
                >
                    <Replay />
                </IconButton>

                <Typography variant="h6">
                    Tentar novamente
                </Typography>
            </Box>
        </Container>
    )
}

export default HasErrorInput;
