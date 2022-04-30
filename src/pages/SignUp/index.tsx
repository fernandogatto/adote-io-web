import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import InputMask from 'react-input-mask';

import { format } from 'date-fns';

import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    Select,
    Tooltip,
    IconButton,
    Button,
    CircularProgress,
} from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { ArrowBack } from '@mui/icons-material';

import UserOperations from '@infrastructure/User/UserOperations';

import { validateCPF } from '@common/helpers/validations';

import { ContainerSignUp, SignUpBackground } from './styles';

const SignUp = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const [inputTextData, setInputTextData] = useState({
        nome: '',
        telefone: '',
        cpf: '',
        email: '',
        senha: '',
        confirmarSenha: '',
    });

    const [inputSelectData, setInputSelectData] = useState({
        genero: '',
    });

    const [inputDateData, setInputDateData] = useState({
        dataNascimento: new Date(),
    });

    const [inputError, setInputError] = useState({
        nome: false,
        telefone: false,
        telefoneInvalido: false,
        cpf: false,
        cpfInvalido: false,
        genero: false,
        email: false,
        senha: false,
        confirmarSenha: false,
        senhasDiferentes: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputTextChange = (event: any) => {
        const { name, value } = event.target;

        setInputTextData({...inputTextData, [name]: value});
    }

    const handleInputSelectChange = (event: any) => {
        const { name, value } = event.target;

        setInputSelectData({ ...inputSelectData, [name]: value });
    }

    const handleInputDateChange = (value: Date, name: strnig) => {
        setInputDateData({ ...inputDateData, [name]: format(new Date(value), "MM/dd/yyyy") });
    }

    const handleValidateCpf = (event: any) => {
        const { value } = event.target;

        const cpfValido = validateCPF(value);

        if (!cpfValido) {
            setInputError({ ...inputError, ['cpfInvalido']: true });
        } else {
            setInputError({ ...inputError, ['cpfInvalido']: false });
        }
    }

    const handleConfirmPassword = (event: any) => {
        const { value } = event.target;

        const name = 'senhasDiferentes';

        if (value !== inputTextData.senha) {
            setInputError({...inputError, [name]: true});
        } else {
            setInputError({...inputError, [name]: false});
        }
    }

    const handleSubmit = async () => {
        try {
            const {
                nome,
                telefone,
                cpf,
                email,
                senha,
                confirmarSenha,
            } = inputTextData;

            const {
                genero,
            } = inputSelectData;

            const {
                dataNascimento,
            } = inputDateData;

            setInputError({
                nome: nome === '' ? true : false,
                telefone: telefone === '' ? true : false,
                telefoneInvalido: telefone.length < 14 ? true : false,
                cpf: cpf === '' ? true : false,
                genero: genero === '' ? true : false,
                email: email === '' ? true : false,
                senha: senha === '' ? true : false,
                confirmarSenha: confirmarSenha === '' ? true : false,
                senhasDiferentes: inputError.senhasDiferentes,
            });

            if (
                nome !== '' &&
                telefone !== '' &&
                !inputError.telefoneInvalido < 14 &&
                cpf !== '' &&
                genero !== '' &&
                email !== '' &&
                senha !== '' &&
                confirmarSenha !== '' &&
                !inputError.senhasDiferentes
            ) {
                const data = {
                    nome,
                    telefone: telefone.replace(/[^0-9]+/g, ''),
                    cpf: cpf.replace(/[^0-9]+/g, ''),
                    genero,
                    dataNascimento: format(new Date(dataNascimento), "yyyy-MM-dd"),
                    email,
                    senha,
                };

                setIsSubmitting(true);

                await dispatch(UserOperations.createUser(data));

                setIsSubmitting(false);

                history.goBack();
            }
        } catch (err) {
            console.log('handleSubmit', err);

            setIsSubmitting(false);
        }
    }

    return (
        <ContainerSignUp>
            <Box className="container-content">
                <Tooltip title="Voltar" arrow>
                    <IconButton
                        aria-label="Voltar página"
                        component={Link}
                        to="/"
                    >
                        <ArrowBack />
                    </IconButton>
                </Tooltip>

                <h1>Cadastrar usuário</h1>

                <Box className="container-form">
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

                    <TextField
                        required
                        error={inputError.email}
                        variant="outlined"
                        type="email"
                        name="email"
                        label="E-mail"
                        fullWidth
                        value={inputTextData.email}
                        onChange={handleInputTextChange}
                        disabled={isSubmitting}
                        className="input"
                        helperText={inputError.email && 'Campo obrigatório'}
                    />

                    <InputMask
                        mask={inputTextData.telefone.length > 14 ? "(99) 99999-9999" : "(99) 9999-99999"}
                        maskChar=""
                        fullWidth
                        value={inputTextData.telefone}
                        onChange={handleInputTextChange}
                        disabled={isSubmitting}
                    >
                        {(params: any) => (
                            <TextField
                                {...params}
                                required
                                error={inputError.telefone || inputError.telefoneInvalido}
                                variant="outlined"
                                type="tel"
                                label="Telefone"
                                name="telefone"
                                fullWidth
                                className="input"
                                helperText={
                                    (inputError.telefone && 'Campo obrigatório') ||
                                    (inputError.telefoneInvalido && 'Telefone inválido')
                                }
                            />
                        )}
                    </InputMask>

                    <InputMask
                        mask={"999.999.999-99"}
                        maskChar=""
                        fullWidth
                        value={inputTextData.cpf}
                        onChange={(event: any) => {
                            handleInputTextChange(event);

                            handleValidateCpf(event);
                        }}
                        disabled={isSubmitting}
                    >
                        {(params: any) => (
                            <TextField
                                {...params}
                                required
                                error={inputError.cpf || inputError.cpfInvalido}
                                variant="outlined"
                                type="tel"
                                label="CPF"
                                name="cpf"
                                fullWidth
                                className="input"
                                helperText={
                                    (inputError.cpf && 'Campo obrigatório') ||
                                    (inputError.cpfInvalido && 'CPF inválido')
                                }
                            />
                        )}
                    </InputMask>

                    <FormControl
                        required
                        error={inputError.genero}
                        className="input"
                        disabled={isSubmitting}
                    >
                        <InputLabel>
                            Gênero
                        </InputLabel>

                        <Select
                            value={inputSelectData.genero}
                            label="Gênero"
                            name="genero"
                            onChange={handleInputSelectChange}
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

                            <MenuItem value="Outros">
                                Outros
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
                            onChange={(value: any) => {
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

                    <TextField
                        required
                        error={inputError.senha}
                        variant="outlined"
                        type="password"
                        name="senha"
                        label="Senha"
                        fullWidth
                        value={inputTextData.senha}
                        onChange={handleInputTextChange}
                        disabled={isSubmitting}
                        className="input"
                        helperText={inputError.senha && 'Campo obrigatório'}
                    />

                    <TextField
                        required
                        error={inputError.confirmarSenha || inputError.senhasDiferentes}
                        variant="outlined"
                        type="password"
                        name="confirmarSenha"
                        label="Confirmar senha"
                        fullWidth
                        value={inputTextData.confirmarSenha}
                        onChange={(event: any) => {
                            handleInputTextChange(event);

                            handleConfirmPassword(event);
                        }}
                        disabled={isSubmitting}
                        className="input"
                        helperText={
                            (inputError.confirmarSenha && 'Campo obrigatório') ||
                            (inputError.senhasDiferentes && 'As senhas são diferentes')
                        }
                    />

                    <Box mt={2} className="grid-button">
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
                                Salvar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <SignUpBackground />
        </ContainerSignUp>
    )
}

export default SignUp;
