import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

export const MyInput = (props) => {
    return (
        <Box sx={{padding: '5px 10px', backgroundColor: 'background.light', border: 'solid 2px black', ...props.sx}}>
            <input type={'text'} autoComplete='off' style={{border: 'none', background: 'none', fontFamily: 'Roboto Condensed', fontSize: 30, width: '100%'}} {...props} />
        </Box>
    )
}