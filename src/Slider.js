import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const CustomSlider = ({ name, value, onChange }) => {
    const handleChange = (_, newValue) => {
      onChange(name, newValue);
    };

    return (
        <>
            <Slider 
             value={value}
             onChange={handleChange}
            aria-label="Temperature"
            defaultValue={0}
            //getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            />
        </>
    )

    }

export default CustomSlider;