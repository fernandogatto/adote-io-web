import React from 'react';

import {
    TableRow,
    TableCell,
    IconButton,
    Typography,
} from '@mui/material';

import { Replay } from '@mui/icons-material';

import { Skeleton } from '@mui/lab';

const TableLoading = ({ linhas, colunas, isLoading, hasError, onPress }) => {
    return (
        <>
            {hasError && (
                <TableRow>
                    <TableCell align="center" colSpan={colunas}>
                        <IconButton
                            onClick={onPress}
                        >
                            <Replay />
                        </IconButton>

                        <Typography variant="h6">
                            Tentar novamente
                        </Typography>
                    </TableCell>
                </TableRow>
            )}

            {isLoading && (
                [...Array(linhas)].map((e, i) => (
                    <TableRow key={i}>
                        {[...Array(colunas)].map((e, j) => (
                            <TableCell key={j}>
                                <Skeleton
                                    type="rect"
                                    className="skeleton"
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                ))
            )}

        </>
    );
}

export default TableLoading;
