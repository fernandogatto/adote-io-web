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

    &.container-grid-area {
        .item-header {
            padding: 40px 20px 20px;
            border-radius: 12px;
            background-color: #FFF;
            box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
                0px 1px 1px 0px rgb(0 0 0 / 14%),
                0px 1px 3px 0px rgb(0 0 0 / 12%);

            display: flex;
            justify-content: space-between;
            align-items: center;

            @media(max-width: 767px) {
                flex-direction: column;
            }

            .container-description {
                h1 {
                    margin-bottom: 24px;
                }

                a {
                    margin-top: 24px;
                }
            }

            .container-image {
                img {
                    max-width: 300px;
                    width: 100%;
                }
            }
        }
    }

    p {
        color: ${props => props.theme.palette.description.secondary.light};
    }

    .container-section + .container-section {
        margin-top: 32px;
    }

    .container-title {
        margin-bottom: 16px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .container-flex {
        display: flex;
        align-items: center;
    }

    .container-button {
        margin-left: 16px;

        button + button {
            margin-left: 8px;
        }
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
