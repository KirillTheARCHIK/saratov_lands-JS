import MapTwoTone from '@mui/icons-material/MapTwoTone';
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { NavMenu } from './NavMenu';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { NavAccount } from './NavAccount';

export const Header = () => {
    return (
        <Box sx={{
            display: 'flex', 
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            alignContent: 'stratch',
            height: 80
        }}>
            <Box sx={{width: '30%', display: 'flex', alignItems: 'center'}}>
                <MapTwoTone sx={{margin: '30px 10px', fontSize: 80}} />
                <Typography fontSize={60} >Земли </Typography><Typography fontSize={60} color={'text.secondary'}>Саратова</Typography>
            </Box>
            <Box sx={{width: '40%'}}>
                <NavMenu links={[
                    {name: 'Главная', link: '/main/'},
                    {name: 'Каталог', link: '/main/catalog'},
                    {name: 'Акции', link: '/main/promo'},
                    {name: 'Карта', link: '/map'}
                ]} />
            </Box>
            <Box sx={{width: '30%'}}>
                <NavAccount />
            </Box>
        </Box>
    )
}