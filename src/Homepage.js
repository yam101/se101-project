import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import cover from "./images/background.png";
import { GoogleSpreadsheet } from "google-spreadsheet";
import Slider from './Slider';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';


const font = "'Poppins', sans-serif";

const data = [
    { x: 100, y: 200, id: 1 },
    { x: 120, y: 100, id: 2 },
    { x: 170, y: 300, id: 3 },
    { x: 140, y: 250, id: 4 },
    { x: 150, y: 400, id: 5 },
    { x: 110, y: 280, id: 6 },
  ];

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

function Copyright() {

    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Wattendance
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


function Homepage() {

    return (
        <> 
            <div style={{
                width: '100%', top: 'calc(0vh-100px)', height: '100%', backgroundImage: `url(${cover})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'fixed',
                zIndex: '-1'
            }}>
            </div >

            <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="column" sx={{ pr:'200px', pl:'200px' }} alignItems="center">
            <Box sx={{ zIndex: '2' }}>
                <div class='spacer'></div>
                <Typography variant="h3" gutterBottom>
                    SE 2028'S DASHBOARD
                </Typography>
            </Box>

            
        
            <br></br>


    

            <Card>
            <ScatterChart
            series={[
            { type: 'scatter', label: 'Var A', data: data.slice(0, 25) },
            { type: 'scatter', label: 'Var B', data: data.slice(25) },
            ]}
            width={800}
            height={600}
            />
            </Card>
            
        </Stack>
        {/* Footer */}
        <Box sx={{ p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
            Wattendance
            </Typography>
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
            Track your attendance
            </Typography>
            <Copyright />
        </Box>
        {/* End footer */}
        </ThemeProvider>
    </>   
    );

    }
  export default Homepage;
  