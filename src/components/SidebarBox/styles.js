import styled from 'styled-components';

export const ContainerSidebarBox = styled.div`
    width: 100%;
    background-color: ${props => props.theme.palette.background.primary.main};
    padding: 16px;
    border-radius: 12px;

    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%),
        0px 1px 3px 0px rgb(0 0 0 / 12%);

    .container-title {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }

    .container-content {
        p {
            color: ${props => props.theme.palette.description.secondary.light};
        }

        .item-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;

            .avatar {
                border-radius: 50%;
                height: 40px;
                width: 40px;
                object-fit: cover;
                margin-right: 16px;
                background-color: ${props => props.theme.palette.background.secondary.main};
            }

            h3 {
                margin-bottom: 4px;
            }
        }

        .link-box {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
