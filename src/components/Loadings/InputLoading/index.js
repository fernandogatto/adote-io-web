import React from 'react';

import { Skeleton } from '@mui/material';

const InputLoading = ({ marginTop, marginBottom }) => {
    return (
        <Skeleton
            animation="wave"
            variant="rect"
            style={{
                height: 56,
                width: '100%',
                marginTop: marginTop || 16,
                marginBottom: marginBottom || 16,
            }}
        />
    )
}

export default InputLoading;
