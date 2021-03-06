import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

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

import { ArrowBack, Check, Delete } from '@mui/icons-material';

import { Menu, ConfirmDialog, TableLoading } from '@components';

import AdoptionOperations from '@infrastructure/Adoption/AdoptionOperations';

import {
    ContainerAdoptionRequests,
    ContentAdoptionRequests,
} from './styles';

const AdoptionRequests = ({ match }: any): JSX.Element => {
    const { id } = match.params;

    const dispatch = useDispatch();

    const [requests, setRequests] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [hasError, setHasError] = useState(false);

    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

    const [selectedItem, setSelectedItem] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        getAdoptionRequest();
    }, []);

    const getAdoptionRequest = async () => {
        try {
            setIsLoading(true);

            setHasError(false);

            const response = await dispatch<any>(AdoptionOperations.getChildAdoptionRequests(id));

            setRequests(response);

            setIsLoading(false);
        } catch (err) {
            console.log('getAdoptionRequest', err);

            setIsLoading(false);

            setHasError(true);
        }
    }

    const handleConfirmRequest = (criancaId: string, pessoaId: string, status: string, index: number) => {
        setSelectedItem({
            criancaId,
            pessoaId,
            status,
            index,
        });

        setOpenConfirmDialog(true);
    }

    const handleUpdateAdoptionRequestStatus = async ({ criancaId, pessoaId, status, index }: any) => {
        try {
            let items = [...requests];

            setRequests(items);

            setIsSubmitting(true);

            await dispatch<any>(AdoptionOperations.updateAdoptionRequestStatus(criancaId, pessoaId, status));

            setIsSubmitting(false);

            items.splice(index, 1);

            setSelectedItem({});
        } catch (err) {
            console.log('handleUpdateAdoptionRequestStatus', err);

            setIsSubmitting(false);
        }
    }

    const handleCloseDialog = () => {
        setSelectedItem({});

        setOpenConfirmDialog(false);
    }

    const handleConfirmDialogAction = () => {
        handleUpdateAdoptionRequestStatus(selectedItem);

        setOpenConfirmDialog(false);
    }

    return (
        <ContainerAdoptionRequests>
            <Menu />

            <ConfirmDialog
                dialogOpen={openConfirmDialog}
                handleCloseDialog={handleCloseDialog}
                handleConfirmAction={handleConfirmDialogAction}
                title={selectedItem.status === 'APROVADO' ? "Aprovar solicita????o" : "Cancelar solicita????o"}
                message="Tem certeza que deseja seguir?"
            />

            <Box className="container-page">
                <ContentAdoptionRequests>
                    <Box className="container-back-page">
                        <Tooltip title="Voltar" arrow>
                            <IconButton
                                aria-label="Voltar p??gina"
                                component={Link}
                                to="/adoption"
                            >
                                <ArrowBack />
                            </IconButton>
                        </Tooltip>

                        <h1>Solicita????es de Ado????o</h1>
                    </Box>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">
                                        Solicitante
                                    </TableCell>

                                    <TableCell align="center">
                                        Data
                                    </TableCell>

                                    <TableCell align="center">
                                        A????es
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableLoading
                                    linhas={2}
                                    colunas={3}
                                    isLoading={isLoading}
                                    hasError={hasError}
                                    onPress={getAdoptionRequest}
                                />

                                {!isLoading &&
                                    !hasError &&
                                    requests &&
                                    requests.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={3} align="center">
                                                Nenhum resultado encontrado
                                            </TableCell>
                                        </TableRow>
                                )}

                                {!isLoading &&
                                    !hasError &&
                                    requests &&
                                    requests.length > 0 &&
                                    requests.map((item, index) => (
                                        <TableRow key={item.pessoaId}>
                                            <TableCell align="center">
                                                {item.nomeSolicitante}
                                            </TableCell>

                                            <TableCell align="center">
                                                {`${item.dataSolicitacaoConsolidacao[2]}/${item.dataSolicitacaoConsolidacao[1]}/${item.dataSolicitacaoConsolidacao[0]}`}
                                            </TableCell>

                                            <TableCell align="center" className="container-flex">
                                                <Box className="grid-button table-button">
                                                    <Box className="wrapper">
                                                        {isSubmitting &&
                                                            selectedItem.pessoaId === item.pessoaId &&
                                                            selectedItem.status === 'APROVADO' && (
                                                                <CircularProgress
                                                                    className="circular-progress"
                                                                    style={{ width: 24, height: 24 }}
                                                                />
                                                        )}

                                                        <Tooltip title="Aprovar" arrow>
                                                            <IconButton
                                                                aria-label="Aprovar"
                                                                size="small"
                                                                onClick={() => handleConfirmRequest(item.criancaId, item.pessoaId, 'APROVADO', index)}
                                                                disabled={isSubmitting}
                                                            >
                                                                <Check />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </Box>

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
                                                                onClick={() => handleConfirmRequest(item.criancaId, item.pessoaId, 'CANCELADO', index)}
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
        </ContainerAdoptionRequests>
    );
}

export default AdoptionRequests;
