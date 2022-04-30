import styled from 'styled-components';

interface IContainerCardProps {
    gridTemplateColumns: string;
}

export const ContainerCard = styled.div<IContainerCardProps>`
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns};
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

    .card-container {
        padding: 0;
        border-radius: 12px;
    }

    .image-item {
        height: 200px;
    }
`;
