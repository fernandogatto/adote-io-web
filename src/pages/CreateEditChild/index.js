import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { format } from 'date-fns';

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
    Checkbox,
    Button,
    CircularProgress,
} from '@mui/material';

import { ArrowBack, Delete } from '@mui/icons-material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import {
    ContainerCreateEditChild,
    ContentCreateEditChild,
    SelectedItem,
} from './styles';

import Menu from '../../components/Menu';

import ConfirmDialog from '../../components/Dialogs/ConfirmDialog';

import BrothersDialog from '../../components/Dialogs/BrothersDialog';

import FormLoading from '../../components/Loadings/FormLoading';

import ChildOperations from '../../common/rules/Child/ChildOperations';

const CreateEditChild = ({ match }) => {
    const { id } = match.params;

    const dispatch = useDispatch();

    const history = useHistory();

    const [children, setChildren] = useState([]);

    const [isLoadingChildren, setIsLoadingChildren] = useState(false);

    const [hasErrorChildren, setHasErrorChildren] = useState(false);

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

    const [recemNascido, setRecemNascido] = useState(false);

    const [inputError, setInputError] = useState({
        nome: false,
        genero: false,
        localizacao: false,
    });

    const [irmaos, setIrmaos] = useState([]);

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

    const [deletedItem, setDeletedItem] = useState({});

    useEffect(() => {
        getAllChildren();

        if (id) {
            getChild();
        }
    }, []);

    const getAllChildren = async () => {
        try {
            setIsLoadingChildren(true);

            setHasErrorChildren(false);

            const response = await dispatch(ChildOperations.getAllChildren());

            setChildren(response);

            setIsLoadingChildren(false);
        } catch (err) {
            console.log('getAllChildren', err);

            setIsLoadingChildren(false);

            setHasErrorChildren(true);
        }
    }

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

            setInputDateData({
                dataNascimento: format(new Date(response.dataNascimento), 'MM/dd/yyyy')
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
        setInputDateData({ ...inputDateData, [name]: format(new Date(value), "MM/dd/yyyy") });
    }

    const handleConfirmDelete = (id, index) => {
        setDeletedItem({
            id,
            index,
        });

        setOpenConfirmDialog(true);
    }

    const handleDelete = async (item) => {
        let items = [...irmaos];

        setIrmaos(items);

        items.splice(item.index, 1);

        setDeletedItem({});
    }

    const handleCloseDialog = () => {
        setDeletedItem({});

        setOpenConfirmDialog(false);
    }

    const handleConfirmDialogAction = () => {
        handleDelete(deletedItem);

        setOpenConfirmDialog(false);
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
                localizacao: localizacao === '' ? true : false,
            });

            if (
                nome !== '' &&
                genero !== ''
            ) {
                const _irmaos = irmaos && irmaos.length > 0
                    ? irmaos.map(item => item.id)
                    : [];

                const data = {
                    nome,
                    localizacao,
                    genero,
                    saude,
                    dataNascimento: format(new Date(dataNascimento), "yyyy-MM-dd"),
                    recemNascido,
                    conteudos: [
                        {
                            tipo: 'Imagem',
                            link: link,
                        }
                    ],
                    irmaosASeremCadastrados: _irmaos,
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

            <ConfirmDialog
                dialogOpen={openConfirmDialog}
                handleCloseDialog={handleCloseDialog}
                handleConfirmAction={handleConfirmDialogAction}
                title="Excluir irmão"
                message="Tem certeza que deseja excluir este item?"
            />

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
                                            dateAdapter={AdapterDateFns}
                                        >
                                            <DatePicker
                                                label="Data de nascimento"
                                                name="dataNascimento"
                                                value={inputDateData.dataNascimento}
                                                inputFormat={
                                                    format(new Date(inputDateData.dataNascimento), "dd/MM/yyyy")
                                                }
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

                                        <Box className="input flex">
                                            <Checkbox
                                                checked={recemNascido}
                                                color="primary"
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                onChange={() => setRecemNascido(!recemNascido)}
                                            />

                                            <p>Recém nascido</p>
                                        </Box>
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

                                <Box className="section-form container-box">
                                    <Box className="item-box">
                                        <BrothersDialog
                                            selectedArray={irmaos}
                                            setSelectedArray={setIrmaos}
                                            isLoading={isLoadingChildren}
                                            hasError={hasErrorChildren}
                                            data={children}
                                            getData={getAllChildren}
                                            handleConfirmAction={() => {}}
                                            title="Selecionar irmãos"
                                            confirm="Salvar"
                                        />

                                        {irmaos && irmaos.length > 0 && irmaos.map((item, index) => (
                                            <SelectedItem key={item.id}>
                                                <Box className="item-title">
                                                    <img
                                                        src={item.conteudo[0].link}
                                                        alt={item.nome}
                                                    />

                                                    <p>{item.nome}</p>
                                                </Box>

                                                <Box className="actions">
                                                    <Tooltip title="Excluir" arrow>
                                                        <IconButton onClick={() => handleConfirmDelete(item.id, index)}>
                                                            <Delete />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Box>
                                            </SelectedItem>
                                        ))}
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
