import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { Box, Dialog, DialogActions, DialogTitle, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../redux/Auth/actions';
import { MyButton } from './MyButton';
import { TextButton } from './TextButton';

export const NavAccount = () => {
    const isAuth = useSelector(state => state.Auth.isAuth)
    const user = useSelector(state => state.Auth.user)
    const [isDialogOpen, setisDialogOpen] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        
    }, []);

    return (
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 5}}>
            {isAuth ? 
            <Tooltip title={'Выйти из аккаунта'} placement='bottom'>
                <TextButton onClick={()=>{setisDialogOpen(true)}} text={user?.email} sx={{textDecoration: 'none', '&:hover': {textDecoration: 'underline'}}} />
            </Tooltip>
            : <MyButton text={'Войти'} link={'/main/login'} /> }
            <AccountCircleOutlined sx={{margin: '20px 0', fontSize: 60}} />
            <Dialog open={isDialogOpen}>
                <DialogTitle>Выйти из аккаунта?</DialogTitle>
                <DialogActions>
                    <MyButton text={'Да'} onClick={()=>{logout(dispatch); setisDialogOpen(false)}} />
                    <MyButton text={'Нет'} onClick={()=>{setisDialogOpen(false)}} />
                </DialogActions>
            </Dialog>
        </Box>
    )
}