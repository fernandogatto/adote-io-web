import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import {
    Box,
    FormControl,
    TextField,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    Tooltip,
    IconButton,
    Button,
    CircularProgress,
} from '@mui/material';

import {
    Visibility,
    VisibilityOff,
} from '@mui/icons-material';

import { ContainerSignIn, SignInBackground } from './styles';

import logo from '@assets/logo.png';

import { useAuth } from '@contexts/Auth';

const SignIn = (): JSX.Element => {
    const history = useHistory();

    const { signIn } = useAuth();

    const [inputTextData, setInputTextData] = useState({
        email: '',
        senha: '',
    });

    const [inputError, setInputError] = useState({
        email: false,
        senha: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputTextChange = (event: any) => {
        const { name, value } = event.target;

        setInputTextData({...inputTextData, [name]: value});
    }

    const handleSubmit = async () => {
        try {
            const { email, senha } = inputTextData;

            setInputError({
                email: email === '' ? true : false,
                senha: senha === '' ? true : false,
            });

            if (email !== '' && senha !== '') {
                const data = {
                    email,
                    senha,
                };

                setIsSubmitting(true);

                await signIn(data);

                setIsSubmitting(false);

                history.push('/dashboard');
            }
        } catch (err) {
            console.log('handleSubmit', err);

            setIsSubmitting(false);
        }
    }

    return (
        <ContainerSignIn>
            <Box className="container-content">
                <Box className="container-flex container-title">
                    <img
                        src={logo}
                        alt="Logo"
                    />

                    <h1>Adote.io</h1>
                </Box>

                <Box className="container-title">
                    <h2>O início de uma família começa aqui</h2>
                </Box>

                <Box className="container-form">
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

                    <FormControl
                        required
                        error={inputError.senha}
                        variant="outlined"
                        fullWidth
                        className="input"
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            Senha
                        </InputLabel>

                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            label="Senha *"
                            name="senha"
                            value={inputTextData.senha}
                            onChange={handleInputTextChange}
                            disabled={isSubmitting}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Senha visível"
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={event => event.preventDefault()}
                                        edge="end"
                                    >
                                        {showPassword
                                            ? <Tooltip title="Esconder senha" arrow>
                                                <Visibility />
                                            </Tooltip>
                                            : <Tooltip title="Mostrar senha" arrow>
                                                <VisibilityOff />
                                            </Tooltip>
                                        }
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <Box mt={2} className="grid-button">
                        <Box className="container-links">
                            <Link to="/sign-up">
                                Cadastrar
                            </Link>
                        </Box>

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
                                Entrar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <SignInBackground />
        </ContainerSignIn>
    )
}

export default SignIn;
