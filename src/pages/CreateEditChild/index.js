import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import moment from 'moment';

import {
    Box,
    Tooltip,
    IconButton,
    TextField,
    FormControl,
    FormHelperText,
    InputLabel,
    Select,
    MenuItem,
    Button,
    CircularProgress,
} from '@mui/material';

import { ArrowBack } from '@mui/icons-material';

import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import {
    ContainerCreateEditChild,
    ContentCreateEditChild,
} from './styles';

import Menu from '../../components/Menu';

import FormLoading from '../../components/Loadings/FormLoading';

import ChildOperations from '../../common/rules/Child/ChildOperations';

const CreateEditChild = ({ match }) => {
    const { id } = match.params;

    const dispatch = useDispatch();

    const history = useHistory();

    const [child, setChild] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const [hasError, setHasError] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [isUpdate, setIsUpdate] = useState(false);

    const [inputTextData, setInputTextData] = useState({
        nome: '',
        localizacao: '',
        link: '',
    });

    const [inputSelectData, setInputSelectData] = useState({
        genero: '',
        saude: '',
    });

    const [inputDateData, setInputDateData] = useState({
        dataNascimento: new Date(),
    });

    const [inputError, setInputError] = useState({
        nome: false,
        genero: false,
        saude: false,
        localizacao: false,
        link: false,
    });

    useEffect(() => {
        if (id) {
            getChild();
        }
    }, []);

    const getChild = async () => {
        try {
            setIsUpdate(true);

            setIsLoading(true);

            setHasError(false);

            const response = await dispatch(ChildOperations.getChild(id));

            setIsLoading(false);

            setChild(response);

            setInputTextData({
                nome: response.nome,
                localizacao: response.localizacao,
                link: response.conteudos[0].link,
            });

            setInputSelectData({
                genero: response.genero,
                saude: response.saude,
            });
        } catch (err) {
            console.log('getChild', err);

            setIsLoading(false);

            setHasError(true);
        }
    }

    const handleInputTextChange = (event) => {
        const { name, value } = event.target;

        setInputTextData({ ...inputTextData, [name]: value });
    }

    const handleInputSelectChange = (event) => {
        const { name, value } = event.target;

        setInputSelectData({ ...inputSelectData, [name]: value });
    }

    const handleInputDateChange = (value, name) => {
        setInputDateData({ ...inputDateData, [name]: moment(value).format('MM/DD/YYYY')});
    }

    const handleSubmit = async () => {
        try {
            const {
                nome,
                localizacao,
                link,
            } = inputTextData;

            const {
                genero,
                saude,
            } = inputSelectData;

            const { dataNascimento } = inputDateData;

            setInputError({
                nome: nome === '' ? true : false,
                genero: genero === '' ? true : false,
            });

            if (
                nome !== '' &&
                genero !== ''

            ) {
                const data = {
                    nome,
                    localizacao,
                    genero,
                    saude,
                    dataNascimento: moment(dataNascimento).format('YYYY-MM-DD'),
                    conteudos: [
                        {
                            tipo: 'Imagem',
                            link: link,
                        }
                    ],
                };

                setIsSubmitting(true);

                isUpdate
                    ? await dispatch(ChildOperations.updateChildById(id, data))
                    : await dispatch(ChildOperations.createChild(data));

                setIsSubmitting(false);

                history.goBack();
            }
        } catch (err) {
            console.log('handleSubmit', err);

            setIsSubmitting(false);
        }
    }

    return (
        <ContainerCreateEditChild>
            <Menu />

            <Box className="container-page">
                <ContentCreateEditChild>
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

                        <h1>{isUpdate ? 'Editar': 'Cadastrar'} criança</h1>
                    </Box>

                    <FormLoading
                        isLoading={isLoading}
                        hasError={hasError}
                        onPress={getChild}
                    />

                    {(!isUpdate ||
                        (!isLoading && !hasError && child && child.nome !== '')) && (
                            <Box className="container-form">
                                <Box className="container-section container-flex">
                                    <Box className="item-flex">
                                        <TextField
                                            required
                                            error={inputError.nome}
                                            variant="outlined"
                                            type="text"
                                            name="nome"
                                            label="Nome"
                                            fullWidth
                                            value={inputTextData.nome}
                                            onChange={handleInputTextChange}
                                            disabled={isSubmitting}
                                            className="input"
                                            helperText={inputError.nome && 'Campo obrigatório'}
                                        />

                                        <FormControl
                                            required
                                            error={inputError.genero}
                                            variant="outlined"
                                            fullWidth
                                            className="input"
                                        >
                                            <InputLabel htmlFor="genero">
                                                Gênero
                                            </InputLabel>

                                            <Select
                                                value={inputSelectData.genero}
                                                onChange={handleInputSelectChange}
                                                label="Gênero"
                                                name="genero"
                                                disabled={isSubmitting}
                                            >
                                                <MenuItem value="">
                                                    <em>Gênero</em>
                                                </MenuItem>

                                                <MenuItem value="Feminino">
                                                    Feminino
                                                </MenuItem>

                                                <MenuItem value="Masculino">
                                                    Masculino
                                                </MenuItem>
                                            </Select>

                                            {inputError.genero && (
                                                <FormHelperText>
                                                    Campo obrigatório
                                                </FormHelperText>
                                            )}
                                        </FormControl>

                                        <LocalizationProvider
                                            dateAdapter={AdapterMoment}
                                        >
                                            <DatePicker
                                                label="Data de nascimento"
                                                name="dataNascimento"
                                                value={inputDateData.dataNascimento}
                                                inputFormat={moment(inputDateData.dataNascimento)
                                                    .format('DD/MM/YYYY')}
                                                onChange={(value) => {
                                                    handleInputDateChange(value, 'dataNascimento');
                                                }}
                                                disabled={isSubmitting}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        className="input"
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </Box>

                                    <Box className="item-flex">
                                        <TextField
                                            required
                                            error={inputError.localizacao}
                                            variant="outlined"
                                            type="text"
                                            name="localizacao"
                                            label="Localização"
                                            fullWidth
                                            value={inputTextData.localizacao}
                                            onChange={handleInputTextChange}
                                            disabled={isSubmitting}
                                            className="input"
                                            helperText={inputError.localizacao && 'Campo obrigatório'}
                                        />

                                        <FormControl
                                            required
                                            error={inputError.saude}
                                            variant="outlined"
                                            fullWidth
                                            className="input"
                                        >
                                            <InputLabel htmlFor="saude">
                                                Saúde
                                            </InputLabel>

                                            <Select
                                                value={inputSelectData.saude}
                                                onChange={handleInputSelectChange}
                                                label="Saúde"
                                                name="saude"
                                                disabled={isSubmitting}
                                            >
                                                <MenuItem value="">
                                                    <em>Saúde</em>
                                                </MenuItem>

                                                <MenuItem value="Doente">
                                                    Doente
                                                </MenuItem>

                                                <MenuItem value="Possui deficiência crônica">
                                                    Possui deficiência crônica
                                                </MenuItem>

                                                <MenuItem value="Sadio">
                                                    Sadio
                                                </MenuItem>
                                            </Select>

                                            {inputError.saude && (
                                                <FormHelperText>
                                                    Campo obrigatório
                                                </FormHelperText>
                                            )}
                                        </FormControl>

                                        <TextField
                                            required
                                            error={inputError.link}
                                            variant="outlined"
                                            type="text"
                                            name="link"
                                            label="Endereço da imagem"
                                            fullWidth
                                            value={inputTextData.link}
                                            onChange={handleInputTextChange}
                                            disabled={isSubmitting}
                                            className="input"
                                            helperText={inputError.link && 'Campo obrigatório'}
                                        />
                                    </Box>
                                </Box>

                                <Box className="grid-button">
                                    <Box className="wrapper">
                                        {isSubmitting && (
                                            <CircularProgress
                                                className="circular-progress"
                                                style={{ width: 24, height: 24 }}
                                            />
                                        )}

                                        <Button
                                            aria-label="Submeter formulário"
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            disabled={isSubmitting}
                                            onClick={handleSubmit}
                                        >
                                            {isUpdate ? 'Atualizar' : 'Salvar'}
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                    )}
                </ContentCreateEditChild>
            </Box>
        </ContainerCreateEditChild>
    )
};

export default CreateEditChild;
