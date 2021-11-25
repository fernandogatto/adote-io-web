import React, { useEffect, useState } from 'react';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    Button,
    IconButton,
    Tooltip,
    Checkbox,
} from '@material-ui/core';

import { Add } from '@material-ui/icons';

import {
    Container,
    DialogTitleContainer,
    DialogContentContainer,
    DialogActionContainer,
    DialogItem,
} from './styles';

import HasErrorInput from '../../Errors/HasErrorInput';

import LoadingInput from '../../Loadings/LoadingInput';

const CheckboxDialog = ({
    titleSection,
    hideAdd,
    error,
    messageError,
    closeError,
    selectedArray,
    setSelectedArray,
    isLoading,
    hasError,
    onPress,
    array,
    title,
    confirm,
}) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const [selectedItems, setSelectedItems] = useState(selectedArray);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    }

    const handleCloseDialog = () => {
        setSelectedArray(selectedItems);

        setDialogOpen(false);

        if (selectedItems.length > 0) {
            closeError();
        }
    }

    useEffect(() => {
        setSelectedItems(selectedArray);
    }, [selectedArray]);

    const handleSelectItems = (event, item) => {
        let _items = [...selectedItems];

        _items = _items.filter(value => value.id !== item.id);

        if(event.target.checked) {
            _items.push(item);
        }

        setSelectedItems(_items);
    }

    return (
        <Container>
            <Box className="section-dialog">
                <Box>
                    <h2>{titleSection}</h2>
                </Box>

                {!hideAdd && (
                    <Tooltip title="Adicionar materiais" arrow>
                        <IconButton
                            aria-label="Adicionar materiais"
                            onClick={handleOpenDialog}
                        >
                            <Add />
                        </IconButton>
                    </Tooltip>
                )}
            </Box>

            {error && (
                <Box className="container-error">
                    <p>{messageError}</p>
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
                                onPress={onPress}
                            />
                        )}

                        {isLoading && (
                            <LoadingInput />
                        )}

                        {!isLoading && !hasError && array && array.length === 0 && (
                            <Box>
                                <p>Nenhum resultado encontrado</p>
                            </Box>
                        )}

                        {!isLoading && !hasError && array && array.length > 0 && array.map(value => (
                            <Box key={value.id}>
                                <DialogItem>
                                    <Box className="item-title">
                                        <Checkbox
                                            checked={selectedItems.map(item => item.id).indexOf(value.id) >= 0}
                                            color="primary"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                            onChange={(e) => { handleSelectItems(e, value)}}
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
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleCloseDialog}
                        >
                            {confirm}
                        </Button>
                    </DialogActionContainer>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default CheckboxDialog;
