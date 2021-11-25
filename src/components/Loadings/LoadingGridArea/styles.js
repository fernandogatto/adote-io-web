import styled from 'styled-components';

import {withTheme} from '@material-ui/core/styles';

export const Container = withTheme(styled.div`
    .container-grid-area {
        .item-header, .item-main, .item-sidebar, .item-footer {
            background-color: ${props => props.theme.palette.background.primary.main};
            border-radius: 12px;
            padding: 32px 16px 16px;
        }
    }
`);
