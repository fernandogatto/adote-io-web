import styled from 'styled-components';

import { withTheme } from '@material-ui/core/styles';

export const Container = withTheme(styled.div`
    .container-box {
        padding: 25px 20px;
        width: 100%;
        background-color: ${props => props.theme.palette.background.primary.main};
        border-radius: 12px;

        & + div {
            margin-top: 16px;
        }
    }
`);
