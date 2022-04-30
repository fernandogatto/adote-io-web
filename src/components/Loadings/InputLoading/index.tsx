import React from 'react';

import { Skeleton } from '@mui/material';

interface IInputLoadingProps {
    marginTop?: string | undefined;
    marginBottom?: string | undefined;
}

const InputLoading = ({
    marginTop,
    marginBottom
}: IInputLoadingProps): JSX.Element => {
    return (
        <Skeleton
            animation="wave"
            variant="rectangular"
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
