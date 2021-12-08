import styled from 'styled-components';

export const Container = styled.div`
    .container-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        row-gap: 15px;

        @media(max-width: 768px) {
            grid-template-columns: 1fr;
        }

        .container-image {
            object-fit: cover;
            max-width: 500px;
            width: 100%;
            height: 345px;
        }

        .container-title {
            margin-bottom: 24px;
        }

        .container-registry {
            margin-bottom: 24px;
        }
    }
`;
