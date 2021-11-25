import styled from 'styled-components';

import { withTheme  } from '@material-ui/core/styles';

export const MenuContainer = withTheme(styled.div`
    height: 100vh;
    width: 250px;
    background-color: ${props => props.theme.palette.background.tertiary.main};
    padding: 20px 0 35px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 768px) {
        height: auto;
        width: 100%;
        padding: 20px 30px;
        -webkit-box-shadow: 0px 3px 23px 2px rgb(0 0 0 / .1);
        box-shadow: 0px 3px 23px 2px rgb(0 0 0 / .1);
    }

    .container-logo {
        margin-bottom: 32px;

        @media(max-width: 768px) {
            margin-bottom: 0;
            width: 100%;
            display: flex;
        }

        img {
            height: 70px;

            @media(max-width: 768px) {
                margin: auto;
                height: 45px;
            }
        }
    }

    nav {
        display: flex;
        flex-direction: column;
        width: 100%;

        a {
            padding: 12px;
            color: ${props => props.theme.palette.description.secondary.main};
            transition: .2s ease all;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            font-size: 14px;

            &:hover {
                color: ${props => props.theme.palette.primary.main};
            }

            & + a {
                margin-top: 4px;
            }

            &.active {
                color: ${props => props.theme.palette.primary.main};
                border-right: 3px solid ${props => props.theme.palette.primary.main};
            }

            svg {
                margin-right: 8px;
            }
        }
    }

    .logoff {
        margin-top: auto;
        margin-right: auto;
        padding-left: 16px;
        justify-content: flex-start;
        font-size: 14px;
    }
`);
