import styled from 'styled-components';

export const ContainerAdoptionRequests = styled.div`
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

export const ContentAdoptionRequests = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;

    p {
        color: ${props => props.theme.palette.description.secondary.light};
    }

    .MuiPaper-root {
        padding: 0;
        border-radius: 12px;
    }

    table {
        border-radius: 12px;

        thead {
            background-color: ${props => props.theme.palette.primary.main};
            th {
                color: ${props => props.theme.palette.primary.contrastText};
            }
        }
        tbody {
            a:hover {
                color: ${props => props.theme.palette.text.secondary};
            }
            .grid-button {
                display: flex;
                justify-content: center;
                align-items: center;
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
        .table-button + .table-button {
            margin-left: 4px;
        }
    }
`;
