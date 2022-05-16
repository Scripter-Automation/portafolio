import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TrigFuncForm(data, display, existingData) {
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl sx={{minWidth: 120, m: 1}}>
        <InputLabel id="function">funcion trigonometrica</InputLabel>
        <Select
        labelId="function"
        id="function"
        onChange={(e)=>{data({...existingData, trig: e.target.value})}}
        label="function"
        >
                <MenuItem value="sin">sin(x)</MenuItem>
                <MenuItem value="cos">cos(x)</MenuItem>
                <MenuItem value="tan">tan(x)</MenuItem>
                <MenuItem value="csc">csc(x)</MenuItem>
                <MenuItem value="sec">sec(x)</MenuItem>
                <MenuItem value="cot">cot(x)</MenuItem>
        </Select>
        </FormControl>
    </Box>
  )
}
