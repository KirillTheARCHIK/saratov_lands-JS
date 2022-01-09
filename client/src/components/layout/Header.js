import MapTwoTone from '@mui/icons-material/MapTwoTone';
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { NavMenu } from './NavMenu';

export const Header = () => {
    return (
        <Box sx={{
            display: 'flex', 
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            alignContent: 'stratch',
        }}>
            <Box sx={{width: '30%', display: 'flex', alignItems: 'center'}}>
                <MapTwoTone sx={{margin: '20px 0', fontSize: 80}} />
                <Typography fontSize={60} >Земли </Typography><Typography fontSize={60} color={'text.secondary'}>Саратова</Typography>
            </Box>
            <Box sx={{width: '40%'}}>
                <NavMenu links={[
                    {name: 'Главная', link: '/main'},
                    {name: 'Ссылка1', link: ''},
                    {name: 'Ссылка2', link: ''},
                    {name: 'Карта', link: '/map'}
                ]} />
            </Box>
            <Box sx={{width: '30%', border: 'solid 1px black'}}>
                
            </Box>
        </Box>
    )
}