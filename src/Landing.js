import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import cover from "./images/background.png";

const font = "'Poppins', sans-serif";

const theme = createTheme({
    typography: {
        fontFamily: font,
    },
    palette: {
        primary: {
            main: "#000000"
        }
    },
});

export default function Types() {
    return (
        <>
            <div style={{
                width: '100%', top: 'calc(0vh-100px)', height: '100%', backgroundImage: `url(${cover})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'fixed',
                zIndex: '-1'
            }}>
            </div >
            <ThemeProvider theme={theme}>
                <Stack>
                    <Stack direction="column" justifyContent="center" align="left" sx={{ pt: "20%", ml: "50px", zIndex: '2', fontFamily: 'Poppins' }}>
                    <Typography justifyContent="center" variant="h3" gutterBottom >
                        Welcome to <br /> Wattendance
                    </Typography>

                    <Link style={{ textDecoration: "none" }} to={`/signup`}>
                        <Button variant="contained" color="primary" sx={{ ml: '60px', display: 'block', width: "200px" }}>Sign Up</Button>
                    </Link>

                    </Stack>
                </Stack>
                
            </ThemeProvider>


        </>



    );
}