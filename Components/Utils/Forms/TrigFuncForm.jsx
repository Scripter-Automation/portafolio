import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Typography, Button} from '@mui/material';

export default function TrigFuncForm({data, display, existingData, setGraph}) {
  return (
    <Box sx={{ minWidth: 120 }}>
    <Typography sx={{m:2}}>Nota importante! Ingrese los valores en grados, la conversion a radianes se hace automaticamente</Typography>
    <FormControl sx={{minWidth: 200, m: 1}}>
        <InputLabel id="function">funcion trigonometrica</InputLabel>
        <Select
        labelId="function"
        id="function"
        onChange={(e)=>{data({...existingData, trig: e.target.value})}}
        label="function"
        >
                <MenuItem value="sin">sin(x)</MenuItem>
                <MenuItem value="cos">cos(x)</MenuItem>
        </Select>
    </FormControl>
    <TextField
        type="number" sx={{m:2}}
        inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
        onChange={(e)=>{data({...existingData, lowerBound: parseInt(e.target.value)})}}
        id="lowerBound" label="Lower Bound" variant="standard" />

        <TextField  sx={{m:2}} id="Upper Bound" label="Upper Bound" variant="standard"
        type="number"
        inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
        onChange={(e)=>{data({...existingData, upperBound: parseInt(e.target.value)})}}
        />
        <TextField id="amplitud" label="Amplitud" variant="standard" sx={{m:2}}
            type="number"
            inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
            onChange={(e)=>{data({...existingData, amplitud: parseInt(e.target.value)})}}
        />      
        <TextField id="yint" label="y-intercept" variant="standard" sx={{m:2}}
        type="number"
        inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
        onChange={(e)=>{data({...existingData, yint: parseInt(e.target.value)})}}
        />
        <TextField id="A" label="a" variant="standard" sx={{m:2}}
            type="number"
            inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
            onChange={(e)=>{data({...existingData, a: parseInt(e.target.value)})}}
        />
        <TextField id="B" label="b" variant="standard" sx={{m:2}}
            type="number"
            inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
            onChange={(e)=>{data({...existingData, b: parseInt(e.target.value)})}}
        />
        
        <Button sx={{m:2}}
        onClick={()=>{display(true)}}
        variant="contained" color="success">
          Ejecutar
        </Button>
        <Button 
        sx={{m:2}}
        onClick={()=>{display(false); data(undefined); setGraph(undefined)}}
        variant="contained" color="error">
          Reiniciar
        </Button>
        <br></br>
        <center><img src="/TrigDemo.png"></img></center>
    </Box>
  )
}
