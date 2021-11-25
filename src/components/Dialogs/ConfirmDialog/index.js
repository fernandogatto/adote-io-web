import React from 'react';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@material-ui/core';

import {
    DialogTitleContainer,
    DialogContentContainer,
    DialogActionContainer,
} from './styles';

const ConfirmDialog = ({
    dialogOpen,
    handleCloseDialog,
    handleConfirmAction,
    title,
    message,
}) => {
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
                    <p>{message}</p>
                </DialogContentContainer>
            </DialogContent>

            <DialogActions>
                <DialogActionContainer>
                    <Button
                        color="primary"
                        onClick={handleCloseDialog}
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleConfirmAction}
                    >
                        Sim
                    </Button>
                </DialogActionContainer>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog;
