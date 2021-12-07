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

            img {
                object-fit: cover;
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
