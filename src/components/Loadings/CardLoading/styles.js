import styled from 'styled-components';

export const Container = styled.div`
    .container-box {
        padding: 25px 20px;
        width: 100%;
        background-color: ${props => props.theme.palette.background.primary.main};
        border-radius: 12px;

        & + div {
            margin-top: 16px;
        }
    }
`;
