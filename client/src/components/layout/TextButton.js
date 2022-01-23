import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const TextButton = React.forwardRef((props, ref) => {
    const history=useHistory()
    const myFunction=()=>{history.push(link)}

    return (
        <Typography {...props} ref={ref} onClick={props.onClick || myFunction} fontWeight={600} align='center' sx={{fontSize: 17, color: 'text.primary', margin: '0 10px', cursor: 'pointer', ...props.sx}}>{props.text}</Typography>
    )
})