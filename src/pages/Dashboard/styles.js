import styled from 'styled-components';

export const ContainerDashboard = styled.div`
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

export const ContentDashboard = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;

    p {
        color: ${props => props.theme.palette.description.secondary.light};
    }

    .container-section + .container-section {
        margin-top: 16px;
    }

    .container-title {
        margin-bottom: 16px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .container-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 15px;

        @media(max-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        @media(max-width: 767px) {
            grid-template-columns: 1fr;
        }
    }
`;

export const ItemCard = styled.div`
    .card-container {
        padding: 0;
        a:hover {
            color: ${props => props.theme.palette.text.secondary};
        }
        .container-button {
            margin-left: auto;
        }
    }
    .image-item {
        height: 200px;
    }
`;
