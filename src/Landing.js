import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import cover from "./images/background.png";

export default function Types() {
    return (
        <>
            <div style={{
                width: '100%', top: 'calc(0vh-100px)', height: '100%', backgroundImage: `url(${cover})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'fixed',
                zIndex: '-1'
            }}>
            </div >
            <Box sx={{ zIndex: '2' }}>
                <div class='spacer'></div>
                <Typography variant="h3" gutterBottom>
                    Wattendance
                </Typography>
            </Box>

        </>



    );
}