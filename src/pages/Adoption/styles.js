import styled from 'styled-components';

export const ContainerAdoption = styled.div`
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

export const ContentAdoption = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;
    p {
        color: ${props => props.theme.palette.description.secondary.light};
    }
    .container-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 15px;
        @media(max-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
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
        border-radius: 12px;

        a:hover {
            color: ${props => props.theme.palette.text.secondary};
        }

        .container-button {
            margin-left: auto;

            .wrapper {
                position: relative;

                .circular-progress {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-top: 6px;
                    margin-left: -12px;
                }
            }

            .favorite {
                color: red;
            }
        }
    }

    .image-item {
        height: 200px;
    }
`;
