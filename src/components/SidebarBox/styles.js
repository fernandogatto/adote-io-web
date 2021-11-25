import styled from 'styled-components';

import { withTheme  } from '@material-ui/core/styles';

export const ContainerSidebarBox = withTheme(styled.div`
    width: 100%;
    background-color: ${props => props.theme.palette.background.primary.main};
    padding: 16px;
    border-radius: 12px;

    .container-title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }

    .container-content {
        p {
            color: ${props => props.theme.palette.description.secondary.light};
        }

        .item-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;

            .avatar {
                border-radius: 50%;
                height: 40px;
                width: 40px;
                object-fit: cover;
                margin-right: 16px;
                background-color: ${props => props.theme.palette.background.secondary.main};
            }

            h3 {
                margin-bottom: 4px;
            }
        }
    }
`);
