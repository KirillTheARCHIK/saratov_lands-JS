import { Box, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { login, register } from '../../redux/Auth/actions';
import { MyButton } from '../layout/MyButton';
import { MyInput } from '../layout/MyInput';
import { TextButton } from '../layout/TextButton';
import {useDispatch, useSelector} from 'react-redux'


export const Login = () => {
    const dispatch = useDispatch()
    const [isLogin, setisLogin] = useState(true);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [errorText, seterrorText] = useState('');

    function loginAction(){
        login(dispatch, email, password).then(response=>{
            seterrorText(response)
            setTimeout(()=>{
                seterrorText('')
            }, 3000)
        })
    }
    function registerAction(){
        register(dispatch, email, password).then(response=>{
            seterrorText(response)
            setTimeout(()=>{
                seterrorText('')
            }, 3000)
        })
    }

    return (
        <Box sx={{
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Box sx={{
                width: 500, 
                borderRadius: '50px', 
                backgroundColor: '#eee', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 5,
            }}>
                <Typography fontSize={40} sx={{marginTop: '10px'}} >{isLogin ? 'Вход' : 'Регистрация'}</Typography>
                <Typography fontSize={30} sx={{width: '75%'}} alignContent='flex-start'>E-mail:</Typography>
                <MyInput value={email} onChange={(e)=>{setemail(e.target.value)}} sx={{borderRadius: 20, width: '80%'}} />
                <Typography fontSize={30} sx={{width: '75%'}} alignContent='flex-start'>Пароль:</Typography>
                <MyInput value={password} onChange={(e)=>{setpassword(e.target.value)}} sx={{borderRadius: 20, width: '80%'}} type='password' />
                {/* ТЕКСТ С ОШИБКОЙ */}
                {errorText ? <Typography fontSize={20} sx={{color: 'red', marginTop: '10px'}}>{errorText}</Typography> : null}
                {/* КНОПКА ВХОДА/РЕГИСТРАЦИИ */}
                <MyButton text={isLogin ? 'Войти' : 'Зарегистрироваться'} onClick={()=>{isLogin ? loginAction() : registerAction() }} sx={{marginTop: '20px'}} textsx={{fontSize: 30}}></MyButton>
                {/* СОВЕТ ЗАРЕГИСТРИРОВАТЬСЯ/ВОЙТИ */}
                {isLogin ? 
                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 0'}}>
                        <Typography fontSize={20} >{'Нет аккаунта?'}</Typography>
                        <TextButton sx={{fontSize: 20, '&:hover': {textDecoration: 'underline'}}} onClick={()=>{setisLogin(false)}} text={'Зарегистрироваться'} />
                    </Box>
                    :
                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 0'}}>
                        <Typography fontSize={20} >{'Уже есть аккаунт?'}</Typography>
                        <TextButton sx={{fontSize: 20, '&:hover': {textDecoration: 'underline'}}} onClick={()=>{setisLogin(true)}} text={'Войти'} />
                    </Box>
                }
            </Box>
        </Box>
    )
}