import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { format, differenceInYears, parse } from 'date-fns';

import {
    Box,
    Tooltip,
    IconButton,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material';

import { ArrowBack } from '@mui/icons-material';

import { Menu, ViewLoading } from '@components';

import ChildOperations from '@infrastructure/Child/ChildOperations';

import {
    ContainerViewChild,
    ContentViewChild,
    ItemCard,
} from './styles';

const ViewChild = ({ match }: any): JSX.Element => {
    const { id } = match.params;

    const history = useHistory();

    const dispatch = useDispatch();

    const [child, setChild] = useState({});

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        getChild();
    }, [id]);

    const getChild = async () => {
        try {
            setIsLoading(true);

            setHasError(false);

            const response = await dispatch<any>(ChildOperations.getChild(id));

            setChild(response);

            const filteredImages = response.conteudos
                .filter(item => item.tipo === 'Imagem');

            setImages(filteredImages);

            setIsLoading(false);
        } catch (err) {
            console.log('getChild', err);

            setIsLoading(false);

            setHasError(true);
        }
    }

    const calculateAge = (value: Date) => {
        const _value = format(new Date(value), 'dd/MM/yyyy');

        const date = parse(_value, 'dd/MM/yyyy', new Date());

        const age = differenceInYears(new Date(), date);

        return age;
    }

    return (
        <ContainerViewChild>
            <Menu />

            <Box className="container-page">
                <ContentViewChild>
                    <Box className="container-back-page">
                        <Tooltip title="Voltar" arrow>
                            <IconButton
                                aria-label="Voltar página"
                                component={Link}
                                onClick={() => history.goBack()}
                            >
                                <ArrowBack />
                            </IconButton>
                        </Tooltip>

                        <h1>Adoção</h1>
                    </Box>

                    <ViewLoading
                        isLoading={isLoading}
                        hasError={hasError}
                        onPress={getChild}
                    />

                    {!isLoading && !hasError && child && child.nome !== '' && (
                        <Box className="container-info">
                            <Box className="item-image">
                                {images && images.length > 0 && images.map(item => (
                                    <img
                                        key={item.link}
                                        src={item.link}
                                        alt={item.link}
                                    />
                                ))}
                            </Box>

                            <Box className="item-description">
                                <Box className="container-title">
                                    <h2>{child.nome}</h2>
                                </Box>

                                <Box className="container-registry">
                                    <p>Gênero: {child.genero}</p>

                                    <p>Data de nascimento: {format(new Date(child.dataNascimento), 'dd/MM/yyyy')}</p>

                                    <p>Saúde: {child.saude}</p>

                                    <p>Localização: {child.localizacao}</p>

                                    <p>Recém nascido: {child.recemNascido ? 'Sim' : 'Não'}</p>
                                </Box>
                            </Box>

                            <Box className="item-footer">
                                {child.irmaos &&  child.irmaos.length > 0 && (
                                    <Box className="container-registry">
                                        <Box className="container-title">
                                            <h3>Irmãos</h3>
                                        </Box>

                                        <Box className="container-items">
                                            {child.irmaos.map(item => (
                                                <ItemCard key={item.id}>
                                                    <Card className="card-container">
                                                        <CardMedia
                                                            image={item.conteudos[0].link}
                                                            title={item.nome}
                                                            className="image-item"
                                                        />

                                                        <CardContent>
                                                            <Typography
                                                                gutterBottom
                                                                variant="h6"
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
                                                        </CardActions>
                                                    </Card>
                                                </ItemCard>
                                            ))}
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    )}
                </ContentViewChild>
            </Box>
        </ContainerViewChild>
    )
};

export default ViewChild;
