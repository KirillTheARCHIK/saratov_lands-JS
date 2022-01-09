import { createTheme } from '@mui/material/styles';

const theme=createTheme({
    palette: {
        primary: {
            light: '#f98365',
            main: '#18A7B5',
        },
        //#65b2c6
        secondary: {
            light: '#f9de59',
            main: '#e8a628',
        },
        background: {
            light: '#c0cccc',
            main: '#c0cccc',
        },
        text: {
            primary: 'black',
            secondary: '#18A7B5',
            middle: '#000',
            light: '#444'
        }
    },
    typography: {
        fontFamily: 'Roboto Condensed',
        fontWeightRegular: 400,
        
    }
})

export default theme