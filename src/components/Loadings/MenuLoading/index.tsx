import React from 'react';

import {
    Box,
    IconButton,
    Typography,
    Skeleton,
} from '@mui/material';

import { Replay } from '@mui/icons-material';

interface IMenuLoadingProps {
    isLoading: boolean;
    hasError: boolean;
    onPress: () => void;
}

const MenuLoading = ({
    isLoading,
    hasError,
    onPress
}: IMenuLoadingProps): JSX.Element => {
    return (
        <Box style={{ width: '100%', padding: '0 16px' }}>
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
                <Box>
                    <Skeleton
                        variant="text"
                        width="100%"
                        height={30}
                    />
                    <Skeleton
                        variant="text"
                        width="100%"
                        height={30}
                    />
                    <Skeleton
                        variant="text"
                        width="100%"
                        height={30}
                    />
                </Box>
            )}
        </Box>
    )
}

export default MenuLoading;
