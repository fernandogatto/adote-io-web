import styled from 'styled-components';

export const ContainerViewChild = styled.div`
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

export const ContentViewChild = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;

    p {
        color: ${props => props.theme.palette.description.secondary.light};
    }

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
            width: 100%;
            height: 345px;

            img {
                object-fit: cover;
                border-radius: 12px;
                width: 100%;
                height: 345px;
            }
        }

        .container-title {
            margin-bottom: 24px;
        }

        .container-registry {
            margin-bottom: 24px;

            p {
                line-height: 21px;
            }

            .container-items {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                column-gap: 25px;
                row-gap: 15px;

                @media(max-width: 768px) {
                    grid-template-columns: 1fr;
                }
            }
        }

        .grid-button {
            .wrapper {
                position: relative;
                width: fit-content;

                .circular-progress {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: -12px;
                    margin-left: -12px;
                }
            }
        }
    }
`;

export const ItemCard = styled.div`
    .card-container {
        padding: 0;
        border-radius: 12px;

        a:hover {
            color: ${props => props.theme.palette.text.secondary};
        }

        .container-button {
            margin-left: auto;
        }
    }

    .image-item {
        height: 180px;
    }
`;
