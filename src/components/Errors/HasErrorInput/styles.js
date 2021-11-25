import styled from 'styled-components';

import {withTheme} from '@material-ui/core/styles';

export const Container = withTheme(styled.div`
    .container-has-error {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        height: 56px;

        svg {
            font-size: 18px;
        }
    }
`);
