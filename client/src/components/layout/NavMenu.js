import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const NavMenu = ({style, links}) => {
    const [selectedLinkId, setselectedLinkId] = useState(0);
    const history=useHistory()

    return (
        <Box sx={{
            ...style, 
            display: 'flex', 
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
        }} >
            {links.map((item, index)=>
                <Box onClick={()=>{
                    setselectedLinkId(index)
                    history.push(item.link)
                }} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', margin: '0 15px', '& :hover': {color: 'text.middle'}}}>
                    <Typography fontSize={25} color={selectedLinkId==index ? 'text.primary' : 'inherit'} >{item.name}</Typography>
                    <Box sx={{backgroundColor: selectedLinkId==index ? 'primary.main' : '', width: 8, height: 8, borderRadius: 4,}}/>
                </Box>
            )}
        </Box>
    )
}