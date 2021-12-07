import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';

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
    // Create,
    // Delete,
} from '@mui/icons-material';

import { useAuth } from '../../common/contexts/Auth';

import Menu from '../../components/Menu';

import CardLoading from '../../components/Loadings/CardLoading';

import ConfirmDialog from '../../components/Dialogs/ConfirmDialog';

import ChildOperations from '../../common/rules/Child/ChildOperations';

import {
    ContainerAdoption,
    ContentAdoption,
    ItemCard,
} from './styles';

const Adoption = () => {
    const dispatch = useDispatch();

    const {
        IsLoading: IsLoadingKids,
        HasError: HasErrorKids,
        Data: Kids
    } = useSelector(state => state.Child);

    const { user } = useAuth();

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

    const [deletedItem, setDeletedItem] = useState({});

    const getKids = async () => {
        try {
            const search = {
                nome: '',
                genero: '',
                idadeMinima: '',
                idadeMaxima: '',
                localizacao: '',
            };

            await dispatch(ChildOperations.getChildren(search));
        } catch (err) {
            console.log('getKids - Adoption', err);
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
        let _items = [...Kids];

        _items.splice(item.index, 1);

        // await dispatch(ChildOperations.deleteChildById(item.id));

        setDeletedItem({});

        getKids();
    }

    const getDateDifference = (value) => {
        return moment().diff(value, 'years');
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
                        isLoading={IsLoadingKids}
                        hasError={HasErrorKids}
                        onPress={getKids}
                        rows={8}
                    />

                    <Box className="container-grid">
                        {!IsLoadingKids && !HasErrorKids && Kids && Kids.length === 0 && (
                            <p>Nenhum resultado encontrado</p>
                        )}

                        {!IsLoadingKids && !HasErrorKids && Kids && Kids.length > 0 && Kids.map((item, index) => (
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
                                            Idade: {getDateDifference(item.dataNascimento)}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Gênero: {item.genero}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {item.localizacao}
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Button
                                            aria-label="Ver detalhes da criança"
                                            size="small"
                                            color="primary"
                                            component={Link}
                                            to={`/adoption/child/${item.id}`}
                                        >
                                            Ver detalhes
                                        </Button>

                                        {/* {user.perfil === 'ADMINISTRADOR' && (
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
                                        )} */}
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
