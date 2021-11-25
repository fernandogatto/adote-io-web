import React from 'react';

import {
    Box,
    IconButton,
    Typography,
} from '@material-ui/core';

import { Skeleton } from '@material-ui/lab';

import { Replay } from '@material-ui/icons';

const LoadingSidebar = ({ isLoading, hasError, onPress, rows }) => {
    return (
        <>
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
                [...Array(rows)].map((element, index) => (
                    <Box key={index} style={{marginBottom: 16}}>
                        <Box style={{ display: 'flex' }}>
                            <Skeleton variant="circle" width={40} height={40} style={{marginRight: 16}} />

                            <Box>
                                <Skeleton variant="text" width={150}  height={30} style={{marginBottom: 4}} />
                                <Skeleton variant="text" width={100} />
                            </Box>
                        </Box>
                    </Box>
                ))
            )}
        </>
    )
}

export default LoadingSidebar;
