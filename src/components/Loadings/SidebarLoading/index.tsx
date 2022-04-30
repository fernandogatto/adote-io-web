import React from 'react';

import {
    Box,
    IconButton,
    Typography,
    Skeleton,
} from '@mui/material';

import { Replay } from '@mui/icons-material';

interface ISidebarLoadingProps {
    isLoading: boolean;
    hasError: boolean;
    onPress: () => void;
    rows: number;
}

const SidebarLoading = ({
    isLoading,
    hasError,
    onPress,
    rows
}: ISidebarLoadingProps): JSX.Element => {
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
                            <Skeleton variant="circular" width={40} height={40} style={{marginRight: 16}} />

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

export default SidebarLoading;
