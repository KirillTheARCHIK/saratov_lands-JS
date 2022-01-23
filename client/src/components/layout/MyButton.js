import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const MyButton = ({sx, textsx, text, onClick, link}) => {
    const history=useHistory()
    const myFunction=()=>{history.push(link)}

    return (
        <Box onClick={onClick || myFunction} sx={{ 
            borderRadius: '100px', 
            cursor: 'pointer', 
            border: '', 
            backgroundColor: 'primary.main', 
            padding: '5px 30px', 
            margin: '0 10px',
            // width: 200, 
            // left: '50%', 
            // transform: 'translate(-50%, 0)', 
            // top: 40, 
            position: 'relative',
            ...sx
        }}>
            <Typography fontSize={17} fontWeight={600} align='center' sx={{color: 'text.primary', ...textsx}}>{text}</Typography>
        </Box>
    )
}