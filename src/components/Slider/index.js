import React, { useState } from 'react';

import {
    Box,
    Tooltip,
    IconButton,
} from '@mui/material';

import {
    ArrowBack,
    ArrowForward,
} from '@mui/icons-material';

import { ContainerSlider } from './styles';

import SliderLoading from '../Loadings/SliderLoading';

const Slider = ({ title, array, isLoading, hasError, onPress }) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(array.length);
        }
    }

    const nextSlide = () => {
        if (slideIndex !== array.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === array.length) {
            setSlideIndex(1);
        }
    }

    return (
        <ContainerSlider>
            <Box className="slider-title">
                <h3>{title}</h3>

                <Tooltip title="Voltar" arrow>
                    <IconButton
                        aria-label="Voltar slider"
                        size="small"
                        onClick={prevSlide}
                    >
                        <ArrowBack />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Avançar" arrow>
                    <IconButton
                        aria-label="Avançar slide"
                        size="small"
                        onClick={nextSlide}
                    >
                        <ArrowForward />
                    </IconButton>
                </Tooltip>
            </Box>

            <Box className="container-content">
                <SliderLoading
                    isLoading={isLoading}
                    hasError={hasError}
                    onPress={onPress}
                />

                {!isLoading && !hasError && array && array.length === 0 && (
                    <p>Nenhum resultado encontrado</p>
                )}

                {!isLoading && !hasError && array.map((item, index) => index === slideIndex-1 && (
                    <Box key={index}>
                        <Box className="container-item">
                            <Box className="container-name">
                                <strong>{item.nome}</strong>
                            </Box>

                            <p>{item.depoimento}</p>
                        </Box>
                    </Box>
                ))}
            </Box>
        </ContainerSlider>
    )
}

export default Slider;
