import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Header } from '../components/layout/Header';
import theme from '../theme';
import {Box, ThemeProvider} from '@mui/material'

export const MainPage = () => {
    return (
        <ThemeProvider theme={theme}>  
            <Box sx={{backgroundColor: 'background.main', minHeight: '100%', width: '100vw'}}>
                <Header />
            </Box>
        </ThemeProvider>
    )
}
