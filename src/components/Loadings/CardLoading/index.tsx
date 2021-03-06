import React from 'react';

import {
    Box,
    IconButton,
    Typography,
    Skeleton,
    Card,
    CardActions,
    CardContent,
} from '@mui/material';

import { Replay } from '@mui/icons-material';

import { ContainerCard } from './styles';

interface ICardLoadingProps {
    isLoading: boolean;
    hasError: boolean;
    onPress: () => void;
    rows: number;
    gridTemplateColumns: string;
}

const CardLoading = ({
    isLoading,
    hasError,
    onPress,
    rows,
    gridTemplateColumns
}: ICardLoadingProps): JSX.Element => {
    return (
        <>
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

            <ContainerCard
                gridTemplateColumns={gridTemplateColumns || '1fr 1fr 1fr 1fr'}
            >
                {isLoading && (
                    [...Array(rows)].map((element, index) => (
                        <Card
                            key={index}
                            className="card-container"
                        >
                            <Skeleton
                                animation="wave"
                                variant="rectangular"
                                className="image-item"
                            />

                            <CardContent>
                                <>
                                    <Skeleton
                                        animation="wave"
                                        variant="text"
                                        style={{ marginBottom: 8 }}
                                    />
                                    <Skeleton
                                        animation="wave"
                                        variant="text"
                                        width="80%"
                                    />
                                </>
                            </CardContent>

                            <CardActions>
                                <Skeleton
                                    animation="wave"
                                    variant="rectangular"
                                    height={30}
                                    width={100}
                                />
                            </CardActions>
                        </Card>
                    ))
                )}
            </ContainerCard>
        </>
    )
}

export default CardLoading;
