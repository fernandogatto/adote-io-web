import React from 'react';

import {
    Box,
    IconButton,
    Typography,
    Skeleton,
} from '@mui/material';

import { Replay } from '@mui/icons-material';

import { Container } from './styles';

interface IGridAreaLoadingProps {
    isLoading: boolean;
    hasError: boolean;
    onPress: () => void;
    headerIsVisible: boolean;
    mainIsVisible: boolean;
    sidebarIsVisible: boolean;
    footerIsVisible: boolean;
}

const GridAreaLoading = ({
    isLoading,
    hasError,
    onPress,
    headerIsVisible,
    mainIsVisible,
    sidebarIsVisible,
    footerIsVisible,
}: IGridAreaLoadingProps): JSX.Element => {
    const _headerIsVisible = headerIsVisible || false;

    const _mainIsVisible = mainIsVisible || false;

    const _sidebarIsVisible = sidebarIsVisible || false;

    const _footerIsVisible = footerIsVisible || false;

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
                <Box className="container-grid-area">
                    {_headerIsVisible && (
                        <Box className="item-header">
                            <Skeleton
                                variant="text"
                                width={300}
                                height={48}
                                style={{marginRight: 16}}
                            />
                            <Skeleton variant="text" width={200} />
                            <Skeleton variant="text" width={200} />
                        </Box>
                    )}

                    {_mainIsVisible && (
                        <Box className="item-main">
                            <Skeleton
                                variant="text"
                                width={200}
                                height={40}
                                style={{marginRight: 16}}
                            />
                            <Skeleton variant="text" width={300} />
                            <Skeleton variant="text" width={300} />
                        </Box>
                    )}

                    {_sidebarIsVisible && (
                        <Box className="item-sidebar">
                            <Box style={{ display: 'flex' }}>
                                <Skeleton
                                    variant="circular"
                                    width={40}
                                    height={40}
                                    style={{marginRight: 16}}
                                />

                                <Box>
                                    <Skeleton
                                        variant="text"
                                        width={150}
                                        height={30}
                                        style={{marginBottom: 4}}
                                    />
                                    <Skeleton variant="text" width={100} />
                                </Box>
                            </Box>
                            <Box style={{ display: 'flex', marginTop: 16 }}>
                                <Skeleton
                                    variant="circular"
                                    width={40}
                                    height={40}
                                    style={{marginRight: 16}}
                                />

                                <Box>
                                    <Skeleton
                                        variant="text"
                                        width={150}
                                        height={30}
                                        style={{marginBottom: 4}}
                                    />
                                    <Skeleton variant="text" width={100} />
                                </Box>
                            </Box>
                        </Box>
                    )}

                    {_footerIsVisible && (
                        <Box className="item-footer">
                            <Box style={{ marginBottom: 16 }}>
                                <Skeleton
                                    variant="text"
                                    width={200}
                                    height={40}
                                    style={{marginRight: 16}}
                                />
                                <Skeleton variant="text" width={300} />
                                <Skeleton variant="text" width={300} />
                            </Box>
                            <Box>
                                <Skeleton
                                    variant="text"
                                    width={200}
                                    height={40}
                                    style={{marginRight: 16}}
                                />
                                <Skeleton variant="text" width={300} />
                                <Skeleton variant="text" width={300} />
                            </Box>
                        </Box>
                    )}
                </Box>
            )}
        </Container>
    )
}

export default GridAreaLoading;
