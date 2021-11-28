import React, { useEffect, useState } from 'react';

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

    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleSubmit = () => {
        try {
            const {
                crianca,
            } = inputAutocompleteData;

            const {
                genero,
            } = inputSelectData;

            const {
                idade,
            } = sliderData;

            const data = {
                crianca,
                genero,
                idade,
            };

            console.log('handleSubmit', data);

            setIsSubmitting(true);

            setIsSubmitting(false);

            handleConfirmAction();
        } catch (err) {
            console.log('handleSubmit', err);

            setIsSubmitting(false);
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
                                handleAutocompleteChange(event, value.id, 'crianca');
                            } else {
                                handleAutocompleteChange(event, '', 'crianca');
                            }
                        }}
                        disabled={
                            isSubmitting
                        }
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
                            disabled={isSubmitting}
                        >
                            <MenuItem value="">
                                Gênero
                            </MenuItem>

                            <MenuItem value="Feminino">
                                Feminino
                            </MenuItem>

                            <MenuItem value="Masculino">
                                Masculino
                            </MenuItem>
                        </Select>
                    </FormControl>

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
                        {isSubmitting && (
                            <CircularProgress
                                className="circular-progress"
                                style={{ width: 24, height: 24 }}
                            />
                        )}

                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
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
