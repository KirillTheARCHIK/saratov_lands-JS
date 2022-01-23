import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Header } from '../components/layout/Header';
import theme from '../theme';
import {Box, ThemeProvider} from '@mui/material'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {Main} from '../components/MainPage/Main'
import {Catalog} from '../components/MainPage/Catalog'
import {Promo} from '../components/MainPage/Promo'
import { Login } from '../components/MainPage/Login';


export const MainPage = () => {
    return (
        <ThemeProvider theme={theme}>  
            <Box sx={{backgroundColor: 'background.main', height: '1000px', width: '100%',}}>
                <Header />
                <Switch>
                    <Route path={'/main'} component={Main} exact />
                    <Route path={'/main/catalog'} component={Catalog} exact />
                    <Route path={'/main/promo'} component={Promo} exact />
                    <Route path={'/main/login'} component={Login} exact />
                </Switch>
            </Box>
        </ThemeProvider>
    )
}
