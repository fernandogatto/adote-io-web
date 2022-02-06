import styled from 'styled-components';

export const ContainerCreateEditChild = styled.div`
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

export const ContentCreateEditChild = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;

    .container-form {
        align-items: center;

        .container-section {
            margin-bottom: 16px;
            h2 {
                margin-bottom: 16px;
            }
        }

        .container-flex {
            display: flex;
            margin-bottom: 16px;

            @media(max-width: 768px) {
                flex-direction: column;
            }

            .item-flex {
                flex: 1;

                &:nth-child(1) {
                    margin-right: 8px;
                    @media(max-width: 768px) {
                        margin-right: 0;
                        margin-bottom: 16px;
                    }
                }

                &:nth-child(2) {
                    margin-left: 8px;
                    @media(max-width: 768px) {
                        margin-left: 0;
                    }
                }
            }
        }

        .input {
            width: 100%;
            & + .input {
                margin-top: 16px;
            }
        }

        .grid-button {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: 32px;

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
        }
    }
`;

export const SelectedItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid #ddd;
    padding: 8px 0;

    .item-title {
        display: flex;
        align-items: center;

        img {
            height: 100px;
            width: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 16px;
        }

        p {
            color: #929FB1;
        }
    }

    button {
        min-width: 40px;

        svg {
            height: 100%;

            display: flex;
            align-items: center;
        }
    }
`;
