import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Box, Typography } from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import CurveDownArrow from '../images/curved-arrow-2264.png'
import { useHistory } from 'react-router-dom';

export const StartPage = () => {
    const history=useHistory()

    return (
        <ThemeProvider theme={theme} >
            <Box width='100%' sx={{backgroundColor: 'background.main', height: '100%', overflow: 'hidden' }}>
                <Box width={1200} sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: 1,
                    margin: 'auto',
                    maxHeight: '100vh',
                    // boxShadow: '0 0 10px 1px',
                }}>
                    <Box sx={{
                        gridRow: 1,
                        gridColumn: 1,
                        // backgroundColor: 'primary.main',
                        height: 200,
                    }} >
                        <MapTwoToneIcon sx={{margin: '20px 0', fontSize: 200}} />
                    </Box>
                    <Box sx={{
                        gridRow: 2,
                        gridColumn: '1/5',
                        height: 200,
                        display: 'flex',
                        flexWrap: 'nowrap',
                    }}>
                        <Typography fontSize={140} >Земли </Typography><Typography fontSize={140} color={'text.secondary'}>Саратова</Typography>
                    </Box>
                    <Box sx={{
                        gridRow: 2,
                        gridColumn: '5',
                        height: 200,
                    }}>
                        <Typography fontSize={30} fontWeight={600} >Работаем с 2021 года</Typography>
                    </Box>
                    <Box sx={{
                        gridRow: 3,
                        gridColumn: '2/4',
                        height: 150,
                    }}>
                        <Typography fontSize={35} fontWeight={600} >Лучший сайт для поиска земляных участков в России</Typography>
                    </Box>
                    <Box sx={{
                        gridRow: 4,
                        gridColumn: '4/6',
                        height: 200,
                    }}>
                        <Typography fontSize={35} fontWeight={600} >Также на сайте присутствует интерактивная карта с выставленными на продажу участками</Typography>
                    </Box>
                    <Box sx={{
                        gridRow: 4,
                        gridColumn: '3',
                        height: 150,
                    }}>
                        <img src={CurveDownArrow} width={130} height={130} style={{left: '30%', top: '70%', position: 'relative'}} />
                    </Box>
                    <Box sx={{
                        gridRow: 5,
                        gridColumn: '3',
                        height: 160,
                        width: '233px'
                    }}>
                        <Box onClick={()=>{history.push('/main/')}} sx={{ 
                            borderRadius: '100px', 
                            cursor: 'pointer', 
                            border: '', 
                            backgroundColor: 'primary.main', 
                            padding: '10px 20px', 
                            width: 270, 
                            left: '50%', 
                            transform: 'translate(-50%, 0)', 
                            top: 40, 
                            position: 'relative'
                        }}>
                            <Typography fontSize={30} fontWeight={600} align='center' sx={{color: 'text.primary', }}>Перейти на сайт</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
