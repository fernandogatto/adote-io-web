import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import moment from 'moment';

import {
    Box,
    Tooltip,
    IconButton,
} from '@mui/material';

import { ArrowBack } from '@mui/icons-material';

import Menu from '../../components/Menu';

import ChildOperations from '../../common/rules/Child/ChildOperations';

import {
    ContainerViewChild,
    ContentViewChild,
} from './styles';

const ViewChild = ({ match }) => {
    const { id } = match.params;

    const dispatch = useDispatch();

    const [child, setChild] = useState({});

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        getChild();
    }, []);

    const getChild = async () => {
        try {
            setIsLoading(true);

            setHasError(false);

            const response = await dispatch(ChildOperations.getChild(id));

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
                                to="/adoption"
                            >
                                <ArrowBack />
                            </IconButton>
                        </Tooltip>

                        <h1>Adoção</h1>
                    </Box>

                    {!isLoading && !hasError && child && child.nome !== '' && (
                        <Box className="container-info">
                            <Box className="container-image">
                                {images && images.length > 0 && images.map(item => (
                                    <img
                                        key={item.link}
                                        src={item.link}
                                        alt={item.link}
                                    />
                                ))}
                            </Box>

                            <Box className="container-description">
                                <Box className="container-title">
                                    <h2>{child.nome}</h2>
                                </Box>

                                <Box className="container-registry">
                                    <p>Gênero: {child.genero}</p>

                                    <p>Data de nascimento: {moment(child.dataNascimento).format('DD/MM/YYYY')}</p>

                                    <p>Saúde: {child.saude}</p>

                                    <p>Localização: {child.localizacao}</p>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </ContentViewChild>
            </Box>
        </ContainerViewChild>
    )
};

export default ViewChild;
