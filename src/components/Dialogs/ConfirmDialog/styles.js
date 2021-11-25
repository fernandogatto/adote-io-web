import styled from 'styled-components';

import { withTheme } from '@material-ui/core/styles';

export const DialogTitleContainer = withTheme(styled.div`
    color: ${props => props.theme.palette.primary.main};
`);

export const DialogContentContainer = withTheme(styled.div`
    p {
        color: ${props => props.theme.palette.description.secondary.light};
    }
`);

export const DialogActionContainer = withTheme(styled.div`
    display: flex;
    justify-content: flex-end;

    .wrapper {
        position: relative;

        .circular-progress {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -12px;
            margin-left: -12px;
        }
    }
`);
