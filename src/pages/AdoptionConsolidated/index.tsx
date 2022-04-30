import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import {
    Box,
    Tooltip,
    IconButton,
    TableContainer,
    Table,
    Paper,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    CircularProgress,
} from '@mui/material';

import { Delete } from '@mui/icons-material';

import { Menu, ConfirmDialog, TableLoading } from '@components';

import AdoptionOperations from '@infrastructure/Adoption/AdoptionOperations';

import {
    ContainerAdoptionConsolidated,
    ContentAdoptionRequests,
} from './styles';

const AdoptionConsolidated = (): JSX.Element => {
    const dispatch = useDispatch();

    const [adoptions, setAdoptions] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [hasError, setHasError] = useState(false);

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

    const [selectedItem, setSelectedItem] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        getConsolidatedAdoptions();
    }, []);

    const getConsolidatedAdoptions = async () => {
        try {
            setIsLoading(true);

            setHasError(false);

            const response = await dispatch<any>(AdoptionOperations.getConsolidatedAdoptions());

            setAdoptions(response);

            setIsLoading(false);
        } catch (err) {
            console.log('getAdoptionRequest', err);

            setIsLoading(false);

            setHasError(true);
        }
    }

    const handleConfirmRequest = (criancaId: string, pessoaId: string, index: number) => {
        setSelectedItem({
            criancaId,
            pessoaId,
            index,
        });

        setOpenConfirmDialog(true);
    }

    const handleDeleteConsolidatedAdoption = async ({ criancaId, pessoaId, status, index }: any) => {
        try {
            let items = [...adoptions];

            setAdoptions(items);

            setIsSubmitting(true);

            await dispatch<any>(AdoptionOperations.deleteConsolidatedAdoption(criancaId, pessoaId));

            setIsSubmitting(false);

            items.splice(index, 1);

            setSelectedItem({});
        } catch (err) {
            console.log('handleDeleteConsolidatedAdoption', err);

            setIsSubmitting(false);
        }
    }

    const handleCloseDialog = () => {
        setSelectedItem({});

        setOpenConfirmDialog(false);
    }

    const handleConfirmDialogAction = () => {
        handleDeleteConsolidatedAdoption(selectedItem);

        setOpenConfirmDialog(false);
    }

    return (
        <ContainerAdoptionConsolidated>
            <Menu />

            <ConfirmDialog
                dialogOpen={openConfirmDialog}
                handleCloseDialog={handleCloseDialog}
                handleConfirmAction={handleConfirmDialogAction}
                title={"Cancelar adoção"}
                message="Tem certeza que deseja cancelar esta adoção?"
            />

            <Box className="container-page">
                <ContentAdoptionRequests>
                    <Box className="container-header-page">
                        <h1>Adoções consolidadas</h1>
                    </Box>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">
                                        Solicitante
                                    </TableCell>

                                    <TableCell align="center">
                                        Criança
                                    </TableCell>

                                    <TableCell align="center">
                                        Data
                                    </TableCell>

                                    <TableCell align="center">
                                        Ações
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableLoading
                                    linhas={2}
                                    colunas={4}
                                    isLoading={isLoading}
                                    hasError={hasError}
                                    onPress={getConsolidatedAdoptions}
                                />

                                {!isLoading &&
                                    !hasError &&
                                    adoptions &&
                                    adoptions.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={4} align="center">
                                                Nenhum resultado encontrado
                                            </TableCell>
                                        </TableRow>
                                )}

                                {!isLoading &&
                                    !hasError &&
                                    adoptions &&
                                    adoptions.length > 0 &&
                                    adoptions.map((item, index) => (
                                        <TableRow key={item.pessoaId}>
                                            <TableCell align="center">
                                                {item.nomeSolicitante}
                                            </TableCell>

                                            <TableCell align="center">
                                                {item.nomeCrianca}
                                            </TableCell>

                                            <TableCell align="center">
                                                {`${item.dataSolicitacaoConsolidacao[2]}/${item.dataSolicitacaoConsolidacao[1]}/${item.dataSolicitacaoConsolidacao[0]}`}
                                            </TableCell>

                                            <TableCell align="center" className="container-flex">
                                                <Box className="grid-button table-button">
                                                    <Box className="wrapper">
                                                        {isSubmitting &&
                                                            selectedItem.pessoaId === item.pessoaId &&
                                                            selectedItem.status === 'CANCELADO' && (
                                                                <CircularProgress
                                                                    className="circular-progress"
                                                                    style={{ width: 24, height: 24 }}
                                                                />
                                                        )}

                                                        <Tooltip title="Cancelar" arrow>
                                                            <IconButton
                                                                aria-label="Cancelar"
                                                                size="small"
                                                                onClick={() => handleConfirmRequest(item.criancaId, item.pessoaId, index)}
                                                                disabled={isSubmitting}
                                                            >
                                                                <Delete />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </ContentAdoptionRequests>
            </Box>
        </ContainerAdoptionConsolidated>
    );
}

export default AdoptionConsolidated;
