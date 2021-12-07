import React, { useState } from 'react';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    Button,
    FormControl,
    Autocomplete,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Slider,
    Typography,
    CircularProgress,
} from '@mui/material';

import {
    DialogTitleContainer,
    DialogContentContainer,
    DialogActionContainer,
} from './styles';

const SearchDialog = ({
    dialogOpen,
    handleCloseDialog,
    handleConfirmAction,
    items,
    title,
    confirm,
}) => {
    const [inputAutocompleteData, setInputAutocompleteData] = useState({
        crianca: '',
    });

    const [criancaNome, setCriancaNome] = useState('');

    const [inputSelectData, setInputSelectData] = useState({
        genero: '',
    });

    const [sliderData, setSliderData] = useState({
        idade: [0, 10],
    });

    const [inputTextData, setInputTextData] = useState({
        localizacao: '',
    });

    const handleAutocompleteChange = (event, value, type) => {
        setInputAutocompleteData({ ...inputAutocompleteData, [type]: value });
    }

    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        setInputSelectData({ ...inputSelectData, [name]: value });
    }

    const handleSliderChange = (event, value, type) => {
        setSliderData({ ...sliderData, [type]: value });
    }

    const handleInputTextChange = (event) => {
        const { name, value } = event.target;

        setInputTextData({ ...inputTextData, [name]: value });
    }

    const handleSubmit = () => {
        try {
            const { crianca } = inputAutocompleteData;

            const { genero } = inputSelectData;

            const { idade } = sliderData;

            const { localizacao } = inputTextData;

            const data = {
                nome: crianca,
                genero,
                idadeMinima: idade[0],
                idadeMaxima: idade[1],
                localizacao: localizacao,
            };

            handleConfirmAction(data);
        } catch (err) {
            console.log('handleSubmit', err);
        }
    }

    return (
        <Dialog
            open={dialogOpen}
            onClose={handleCloseDialog}
            keepMounted
            fullWidth
            scroll="paper"
            style={{ margin: 20 }}
        >
            <DialogTitle>
                <DialogTitleContainer>
                    {title}
                </DialogTitleContainer>
            </DialogTitle>

            <DialogContent>
                <DialogContentContainer>
                    <Autocomplete
                        name="crianca"
                        options={items}
                        getOptionLabel={(option) => option && option.nome}
                        fullWidth
                        inputValue={criancaNome}
                        onInputChange={(event, value) => {
                            setCriancaNome(value);
                        }}
                        onChange={(event, value) => {
                            if (value) {
                                handleAutocompleteChange(event, value.nome, 'crianca');
                            } else {
                                handleAutocompleteChange(event, '', 'crianca');
                            }
                        }}
                        className="input"
                        renderInput={(props) => (
                            <TextField
                                {...props}
                                variant="outlined"
                                type="text"
                                label="Criança"
                            />
                        )}
                    />

                    <FormControl
                        variant="outlined"
                        fullWidth
                        className="input"
                    >
                        <InputLabel htmlFor="genero">
                            Gênero
                        </InputLabel>

                        <Select
                            value={inputSelectData.genero}
                            onChange={handleSelectChange}
                            label="Gênero"
                            name="genero"
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
                    </FormControl>

                    <TextField
                        variant="outlined"
                        type="text"
                        name="localizacao"
                        label="Localização"
                        fullWidth
                        value={inputTextData.localizacao}
                        onChange={handleInputTextChange}
                        className="input"
                    />

                    <Box className="input">
                        <Typography mb={1}>
                            Faixa etária
                        </Typography>

                        <Slider
                            getAriaLabel={() => 'Faixa etária'}
                            value={sliderData.idade}
                            onChange={(event, value) => {
                                handleSliderChange(event, value, 'idade');
                            }}
                            valueLabelDisplay="auto"
                        />
                    </Box>
                </DialogContentContainer>
            </DialogContent>

            <DialogActions>
                <DialogActionContainer>
                    <Button
                        color="primary"
                        onClick={handleCloseDialog}
                        className="custom-button"
                    >
                        Cancelar
                    </Button>

                    <Box className="wrapper custom-button">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            {confirm}
                        </Button>
                    </Box>
                </DialogActionContainer>
            </DialogActions>
        </Dialog>
    )
}

export default SearchDialog;
