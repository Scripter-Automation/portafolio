import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Typography, Button} from '@mui/material';


export default function EFuncForm({data, display, existingData, setGraph}) {
  return (
    <Box sx={{ minWidth: 120 }}>
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
        <TextField id="N" label="N" variant="standard" sx={{m:2}}
            type="number"
            inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
            onChange={(e)=>{data({...existingData, n: parseInt(e.target.value)})}}
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
        <center><img src="/EDemo.png"></img></center>
    </Box>
  )
}
