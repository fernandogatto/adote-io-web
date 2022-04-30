import styled from 'styled-components';

export const Container = styled.div`
    .container-info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 25px;
        row-gap: 25px;
        grid-template-areas:
            "image image description description"
            "footer footer footer footer";

        @media(max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-areas:
                "image"
                "description"
                "footer";
        }

        .item-description {
            grid-area: description;
        }

        .item-footer {
            grid-area: footer;
        }

        .item-image {
            grid-area: image;
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
