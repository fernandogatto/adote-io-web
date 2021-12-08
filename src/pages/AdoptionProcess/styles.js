import styled from 'styled-components';

export const ContainerAdoptionProcess = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    @media(max-width: 768px) {
        flex-direction: column;
    }
    .container-page {
        flex: 1;
        overflow-x: hidden;
        overflow-y: scroll;
        padding: 45px 30px;
    }
`;

export const ContentAdoptionProcess = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;

    p {
        color: ${props => props.theme.palette.description.secondary.light};
    }

    .container-title {
        margin-bottom: 16px;
    }

    .container-description {
        margin-bottom: 16px;

        p {
            margin-bottom: 8px;
        }

        span {
            font-size: 13px;
        }
    }
`;
