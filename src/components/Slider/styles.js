import styled from 'styled-components';

export const ContainerSlider = styled.div`
    width: 100%;

    .slider-title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        h3 {
            margin-right: 16px;
        }
    }

    .container-content {
        padding: 0 16px;

        .container-item {
            .container-name {
                margin-bottom: 16px;
            }

            p {
                color: ${props => props.theme.palette.description.secondary.light};
            }
        }
    }
`;
