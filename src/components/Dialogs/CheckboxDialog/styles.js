import styled, { keyframes } from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

function bganimation () {
    return keyframes`
      100% {
          background-position: 100% 100%;
      }
    `
};

export const Container = withTheme(styled.div`
    .section-dialog {
        display: flex;
        align-items: center;

        margin-bottom: 16px;

        h2 {
            margin-right: 16px;
        }
    }

    .container-error {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        svg {
            font-size: 40px;
        }

        p {
            color: ${props => props.theme.palette.error.main};
        }
    }
`);

export const DialogTitleContainer = withTheme(styled.div`
    color: ${props => props.theme.palette.primary.main};
`);

export const DialogContentContainer = withTheme(styled.div`
    p {
        color: ${props => props.theme.palette.description.secondary.light};
    }

    .skeleton {
        height: 60px;
        width: 100%;

        & + .skeleton {
            margin-top: 8px;
        }
    }
`);

export const DialogItem = withTheme(styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid #eee;
    padding: 8px 0;

    &.load-action {
        opacity: 0.5 !important;
        pointer-events: none !important;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image:
            repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 1rem,
            #ccc 1rem,
            #ccc 2rem
        );
        background-size: 200% 200%;
        animation: ${bganimation} 15s linear infinite;
    }

    .item-title {
        display: flex;
        align-items: center;
    }

    .actions {
        min-width: 80px;
    }

    button {
        min-width: 40px;

        svg {
            color: ${props => props.theme.palette.primary.main};
            height: 100%;

            display: flex;
            align-items: center;
        }
    }
`);

export const DialogActionContainer = withTheme(styled.div`
    display: flex;
    justify-content: flex-end;

    .skeleton {
        width: 200px;
        height: 42px;
    }

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
