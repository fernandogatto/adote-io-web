import React from 'react';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material';

import {
    DialogTitleContainer,
    DialogContentContainer,
    DialogActionContainer,
} from './styles';

interface IConfirmDialogProps {
    dialogOpen: boolean;
    handleCloseDialog: () => void;
    handleConfirmAction: () => void;
    title: string;
    message: string;
}

const ConfirmDialog = ({
    dialogOpen,
    handleCloseDialog,
    handleConfirmAction,
    title,
    message,
}: IConfirmDialogProps): JSX.Element => {
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
                        className="custom-button"
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleConfirmAction}
                        className="custom-button"
                    >
                        Sim
                    </Button>
                </DialogActionContainer>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog;
