import React from 'react';

import {
    Box,
    IconButton,
    Typography,
} from '@mui/material';

import { Replay } from '@mui/icons-material';

import { Container } from './styles';

interface IHasErrorInputProps {
    onPress: () => void;
    marginTop?: number | undefined;
    marginBottom?: number | undefined;
}

const HasErrorInput = ({
    onPress,
    marginTop,
    marginBottom
}: IHasErrorInputProps): JSX.Element => {
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
