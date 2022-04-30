import styled, { keyframes } from 'styled-components';

function bganimation () {
    return keyframes`
      100% {
          background-position: 100% 100%;
      }
    `
};

export const Container = styled.div`
    .section-dialog {
        display: flex;
        margin-bottom: 14px;

        .container-section-title {
            margin-right: 8px;

            h2 {
                margin: 0 0 8px;
                font-size: 25px;
            }
        }

        button {
            padding: 0;
            min-width: 38px;

            svg {
                height: 16px;
            }
        }
    }

    .container-error {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        svg {
            font-size: 40px;
            color: ${props => props.theme.palette.primary.main};
        }

        p {
            color: #f44336;
        }
    }
`;

export const DialogTitleContainer = styled.div`
    color: ${props => props.theme.palette.primary.main};
`;

export const DialogContentContainer = styled.div`
    min-width: 400px;
    width: 100%;

    .skeleton {
        height: 60px;
        width: 100%;

        & + .skeleton {
            margin-top: 8px;
        }
    }
`;

export const DialogItem = styled.div`
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

    .avatar {
        border-radius: 50%;
        height: 40px;
        width: 40px;
        object-fit: cover;
        margin-right: 16px;
        background-color: #F0EFF1;
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
`;

export const DialogActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    .custom-button + .custom-button {
        margin-left: 8px;
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
`;
