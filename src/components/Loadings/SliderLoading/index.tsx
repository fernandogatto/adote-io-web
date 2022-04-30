import React from 'react';

import {
    Box,
    IconButton,
    Typography,
    Skeleton,
} from '@mui/material';

import { Replay } from '@mui/icons-material';

interface ISliderLoadingProps {
    isLoading: boolean;
    hasError: boolean;
    onPress: () => void;
}

const SliderLoading = ({
    isLoading,
    hasError,
    onPress
}: ISliderLoadingProps): JSX.Element => {
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
                <>
                    <Skeleton variant="text" height={30} style={{marginBottom: 16}} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </>
            )}
        </>
    )
}

export default SliderLoading;
