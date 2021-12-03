import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Tooltip,
    IconButton,
} from '@mui/material';

import {
    Add,
    Create,
    Delete,
} from '@mui/icons-material';

import { useAuth } from '../../common/contexts/Auth';

import Menu from '../../components/Menu';

import CardLoading from '../../components/Loadings/CardLoading';

import ConfirmDialog from '../../components/Dialogs/ConfirmDialog';

// import PetOperations from '../../common/rules/Pet/PetOperations';

import {
    ContainerAdoption,
    ContentAdoption,
    ItemCard,
} from './styles';

const Adoption = () => {
    const dispatch = useDispatch();

    const { user } = useAuth();

    const [kids, setKids] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [hasError, setHasError] = useState(false);

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

    const [deletedItem, setDeletedItem] = useState({});

    useEffect(() => {
        getPets();
    }, []);

    const getPets = async () => {
        try {
            setIsLoading(true);

            setHasError(false);

            // const response = await dispatch(PetOperations.getPets());
            const response = [{
                id: 1,
                nome: 'Roberto Carlos',
                idade: 3,
                genero: 'Masculino',
                imagem: 'https://www.grudadoemvoce.com.br/wp-content/uploads/2019/08/1566841306-f2b26118ae493d30d03061c2ad8fdd74.jpg'
            }];

            setIsLoading(false);

            setKids(response);
        } catch (err) {
            console.log('getPets', err);

            setIsLoading(false);

            setHasError(true);
        }
    }

    const handleConfirmDelete = (id, index) => {
        setDeletedItem({
            id,
            index,
        });

        setOpenConfirmDialog(true);
    }

    const handleDelete = async (item) => {
        let _items = [...kids];

        _items.splice(item.index, 1);

        setKids(_items);

        // await dispatch(PetOperations.deletePetById(item.id));

        setDeletedItem({});
    }

    return (
        <ContainerAdoption>
            <Menu />

            <ConfirmDialog
                dialogOpen={openConfirmDialog}
                handleCloseDialog={() => {
                    setDeletedItem({});

                    setOpenConfirmDialog(false);
                }}
                handleConfirmAction={() => {
                    handleDelete(deletedItem);

                    setOpenConfirmDialog(false);
                }}
                title="Excluir Criança"
                message="Tem certeza que deseja excluir este item?"
            />

            <Box className="container-page">
                <ContentAdoption>
                    <Box className="container-header-page">
                        <h1>Adoção</h1>

                        {user.perfil === 'ADMINISTRADOR' && (
                            <Tooltip title="Nova criança" arrow>
                                <IconButton
                                    aria-label="Novo pet"
                                    component={Link}
                                    to="/adoption/create"
                                >
                                    <Add />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>

                    <CardLoading
                        isLoading={isLoading}
                        hasError={hasError}
                        onPress={getPets}
                        rows={8}
                    />

                    <Box className="container-grid">
                        {!isLoading && !hasError && kids && kids.length === 0 && (
                            <p>Nenhum resultado encontrado</p>
                        )}

                        {!isLoading && !hasError && kids && kids.length > 0 && kids.map((item, index) => (
                            <ItemCard key={item.id}>
                                <Card className="card-container">
                                    <CardMedia
                                        image={item.imagem}
                                        title={item.nome}
                                        className="image-item"
                                    />

                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            {item.nome}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Idade: {item.idade}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Gênero: {item.genero}
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Button
                                            aria-label="Ver detalhes do pet"
                                            size="small"
                                            color="primary"
                                            component={Link}
                                            to={`/adoption/child/${item.id}`}
                                        >
                                            Ver detalhes
                                        </Button>

                                        {user.perfil === 'ADMINISTRADOR' && (
                                            <Box className="container-button">
                                                <Tooltip title="Editar" arrow>
                                                    <IconButton
                                                        aria-label="Editar"
                                                        size="small"
                                                        component={Link}
                                                        to={`/adoption/edit/child/${item.id}`}
                                                    >
                                                        <Create />
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip title="Excluir" arrow>
                                                    <IconButton
                                                        aria-label="Excluir"
                                                        size="small"
                                                        onClick={() => handleConfirmDelete(item.id, index)}
                                                    >
                                                        <Delete />
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                        )}
                                    </CardActions>
                                </Card>
                            </ItemCard>
                        ))}
                    </Box>
                </ContentAdoption>
            </Box>
        </ContainerAdoption>
    )
};

export default Adoption;
