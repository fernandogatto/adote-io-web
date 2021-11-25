import React from 'react';

import { Skeleton } from '@material-ui/lab';

const LoadingInput = ({ marginTop, marginBottom }) => {
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

export default LoadingInput;
