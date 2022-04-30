import React, { useState, useEffect } from 'react';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    IconButton,
    Button,
    Tooltip,
    Checkbox,
} from '@mui/material';

import { Add } from '@mui/icons-material';

import {
    Container,
    DialogTitleContainer,
    DialogContentContainer,
    DialogItem,
    DialogActionContainer,
} from './styles';

import HasErrorInput from '../../Errors/HasErrorInput';

import InputLoading from '../../Loadings/InputLoading';

interface IBrothersDialogProps {
    hideAdd: boolean;
    error: boolean;
    selectedArray: Array<any>;
    setSelectedArray: () => void;
    isLoading: boolean;
    hasError: boolean;
    data: {};
    getData: () => void;
    handleConfirmAction: () => void
    title: string;
    confirm: string;
}

const BrothersDialog = ({
    hideAdd,
    error,
    selectedArray,
    setSelectedArray,
    isLoading,
    hasError,
    data,
    getData,
    handleConfirmAction,
    title,
    confirm,
}: IBrothersDialogProps): JSX.Element => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const [selectedItems, setSelectedItems] = useState(selectedArray);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    }

    const handleCloseDialog = () => {
        setSelectedArray(selectedItems);

        setDialogOpen(false);
    }

    useEffect(() => {
        setSelectedItems(selectedArray);
    }, [selectedArray]);

    const handleSelectItem = (event: any, item) => {
        let items = [...selectedItems];

        items = items.filter(value => value.id !== item.id);

        if(event.target.checked) {
            items.push(item);
        }

        setSelectedItems(items);
    }

    return (
        <Container>
            <Box className="section-dialog">
                <Box className="container-section-title">
                    <h2>Irmãos</h2>
                </Box>

                {!hideAdd && (
                    <Tooltip title="Adicionar" arrow>
                        <IconButton onClick={handleOpenDialog}>
                            <Add />
                        </IconButton>
                    </Tooltip>
                )}
            </Box>

            {error && (
                <Box className="container-error">
                    <p>Selecione os irmãos *</p>
                </Box>
            )}

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
                        {hasError && (
                            <HasErrorInput
                                onPress={getData}
                            />
                        )}

                        {isLoading && (
                            <InputLoading />
                        )}

                        {!hasError && !isLoading && data && data.length === 0 && (
                            <Box>
                                <p>Nenhum item encontrado</p>
                            </Box>
                        )}

                        {!hasError && !isLoading && data && data.length > 0 && data.map(value => (
                            <Box key={value.id}>
                                <DialogItem>
                                    <Box className="item-title">
                                        <Checkbox
                                            checked={selectedItems.map(item => item.id).indexOf(value.id) >= 0}
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                            onChange={(e) => { handleSelectItem(e, value)}}
                                        />

                                        <img
                                            src={value.conteudo[0].link}
                                            alt={value.nome}
                                            className="avatar"
                                        />

                                        <p>{value.nome}</p>
                                    </Box>
                                </DialogItem>
                            </Box>
                        ))}
                    </DialogContentContainer>
                </DialogContent>

                <DialogActions>
                    <DialogActionContainer>
                        <Button
                            color="primary"
                            onClick={() => setDialogOpen(false)}
                            className="custom-button"
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                handleCloseDialog();

                                handleConfirmAction(selectedItems);
                            }}
                            className="custom-button"
                        >
                            {confirm}
                        </Button>
                    </DialogActionContainer>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default BrothersDialog;
