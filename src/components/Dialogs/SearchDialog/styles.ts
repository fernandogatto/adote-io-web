import styled from 'styled-components';

export const DialogTitleContainer = styled.div`
    color: ${props => props.theme.palette.primary.main};
`;

export const DialogContentContainer = styled.div`
    padding-top: 8px;

    p {
        color: ${props => props.theme.palette.description.secondary.light};
    }

    .input + .input {
        margin-top: 16px;
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
