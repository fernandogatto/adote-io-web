import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { format, differenceInYears, parse } from 'date-fns';

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
    CircularProgress,
} from '@mui/material';

import {
    Add,
    Favorite,
    Visibility,
} from '@mui/icons-material';

import { useAuth } from '../../common/contexts/Auth';

import Menu from '../../components/Menu';

import CardLoading from '../../components/Loadings/CardLoading';

import ConfirmDialog from '../../components/Dialogs/ConfirmDialog';

import ChildOperations from '../../common/rules/Child/ChildOperations';

import AdoptionOperations from '../../common/rules/Adoption/AdoptionOperations';

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

    const [childrenRequested, setChildrenRequested] = useState([]);

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

    const [selectedItem, setSelectedItem] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (user && user.perfil === 'PESSOA') {
            getChildrenRequested();
        }
    }, [user]);

    const getChildrenRequested = async () => {
        try {
            const response = await dispatch(AdoptionOperations.getChildrenRequestedByUserLogged());

            setChildrenRequested(response);
        } catch (err) {
            console.log('getChildrenRequested', err);
        }
    }

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

    const calculateAge = (value) => {
        const _value = format(new Date(value), 'dd/MM/yyyy');

        const date = parse(_value, 'dd/MM/yyyy', new Date());

        const age = differenceInYears(new Date(), date);

        return age;
    }

    const handleConfirmAdoption = (child_id) => {
        setSelectedItem({
            id: child_id,
        });

        setOpenConfirmDialog(true);
    }

    const handleSubmitAdoptionRequest = async (child_id) => {
        try {
            setIsSubmitting(true);

            await dispatch(AdoptionOperations.createAdoptionRequest(child_id));

            setIsSubmitting(false);

            getChildrenRequested();
        } catch (err) {
            console.log('handleSubmitAdoptionRequest', err);

            setIsSubmitting(false);
        }
    }

    return (
        <ContainerAdoption>
            <Menu />

            <ConfirmDialog
                dialogOpen={openConfirmDialog}
                handleCloseDialog={() => {
                    setSelectedItem({});

                    setOpenConfirmDialog(false);
                }}
                handleConfirmAction={() => {
                    handleSubmitAdoptionRequest(selectedItem.id);

                    setOpenConfirmDialog(false);
                }}
                title="Adotar criança"
                message="Tem certeza que deseja adotar esta criança?"
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
                                            Idade: {calculateAge(item.dataNascimento)}
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
                                            disabled={isSubmitting}
                                            to={`/adoption/child/${item.id}`}
                                        >
                                            Ver detalhes
                                        </Button>

                                        {user.perfil === 'ADMINISTRADOR' && (
                                            <Box className="container-button">
                                                <Tooltip title="Ver solicitações de adoção" arrow>
                                                    <IconButton
                                                        aria-label="Ver solicitações de adoção"
                                                        size="small"
                                                        component={Link}
                                                        to={`/adoption/request/child/${item.id}`}
                                                    >
                                                        <Visibility />
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                        )}

                                        {user.perfil === 'PESSOA' && (
                                            <Box className="container-button">
                                                <Box className="wrapper">
                                                    {isSubmitting && selectedItem.id === item.id && (
                                                        <CircularProgress
                                                            className="circular-progress"
                                                            style={{ width: 24, height: 24 }}
                                                        />
                                                    )}
                                                </Box>

                                                <Tooltip title="Solicitar adoção" arrow>
                                                    <IconButton
                                                        aria-label="Solicitar adoção"
                                                        size="small"
                                                        disabled={isSubmitting || childrenRequested.find(value => value === item.id)}
                                                        onClick={() => handleConfirmAdoption(item.id)}
                                                    >
                                                        <Favorite
                                                            className={childrenRequested.find(value => value === item.id) && "favorite"}
                                                        />
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
