import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const NavMenu = ({style, links}) => {
    const history=useHistory()
    const [selectedLink, setselectedLink] = useState(history.location.pathname);

    useEffect(() => {
        setselectedLink(history.location.pathname)
    }, [history.location.pathname]);

    return (
        <Box sx={{
            ...style, 
            display: 'flex', 
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
        }} >
            {links.map((item)=>
                <Box onClick={()=>{
                    history.push(item.link)
                }} sx={{color: 'text.light', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', margin: '0 15px', '& :hover': {color: 'text.primary'}}}>
                    <Typography fontSize={25} color={selectedLink==item.link ? 'text.primary' : 'inherit'} >{item.name}</Typography>
                    <Box sx={{backgroundColor: selectedLink==item.link ? 'primary.main' : '', width: 8, height: 8, borderRadius: 4,}}/>
                </Box>
            )}
        </Box>
    )
}