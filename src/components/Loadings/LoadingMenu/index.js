import React from 'react';

import {
    Box,
    IconButton,
    Typography,
} from '@material-ui/core';

import { Skeleton } from '@material-ui/lab';

import { Replay } from '@material-ui/icons';

const LoadingMenu = ({ isLoading, hasError, onPress }) => {
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

export default LoadingMenu;
