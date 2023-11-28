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


function Homepage() {
    const [sliderValues, setSliderValues] = useState({
        q1: 1,
        q2: 1,
        q3: 1,
        q4: 1
    });
    const handleSliderChange = (name, value) => {
        setSliderValues((prevValues) => ({
            ...sliderValues,
            [name]: value,
        }));
    };
    const handleSubmit = async() => {
        console.log(sliderValues);

        const options = {
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON' },
            body: JSON.stringify({
                q1: sliderValues['q1'],
                q2: sliderValues['q2'],
                q3: sliderValues['q3'],
                q4: sliderValues['q4'],
                
            })
          }
            const response = await fetch('http://localhost:3600/survey', options);
            const result = await response.json();
            console.log(result);
    };


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
            

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Box sx={{ zIndex: '2' }}>
                <div class='spacer'></div>
                <Typography variant="h6" gutterBottom>
                On a scale of 1 - 10, how often do you attend lectures for this class?

                </Typography>
            </Box>
            <Slider name='q1' onChange={handleSliderChange}/>


            <Box sx={{ zIndex: '2' }}>
                <div class='spacer'></div>
                <Typography variant="h6" gutterBottom>
                On a scale of 1 - 10, do you think these lectures have made a positive contribution to your academic success?

                </Typography>
            </Box>
            <Slider name='q2' onChange={handleSliderChange}/>
            
            <Box sx={{ zIndex: '2' }}>
                <div class='spacer'></div>
                <Typography variant="h6" gutterBottom>
                On a scale of 1 - 10, how would you rate the overall importance of attending lectures in your academic journey?

                </Typography>
            </Box>

            <Slider name='q3' onChange={handleSliderChange}/>


            <Box sx={{ zIndex: '2' }}>
                <div class='spacer'></div>
                <Typography variant="h6" gutterBottom>
                On a scale of 1 to 10, to what extent do you believe that missing lectures has negatively impacted your academic performance?

                </Typography>
            </Box>
            <Slider name='q4' onChange={handleSliderChange}/>

            <br></br>
            <br></br>
            <Button variant="contained" color="primary" onClick={handleSubmit}
            sx={{ ml: '60px', display: 'block', width: "200px" }}>Submit</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Stack>
        </ThemeProvider>

    </>   
    );

    }
  export default Homepage;
  