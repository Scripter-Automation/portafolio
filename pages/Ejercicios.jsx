import React, { useState } from 'react'
import PDFLoader from "../Components/Utils/PDFLoader/PDFLoader"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function Ejercicios() {

    const [lista, setLista] = useState(undefined);

  return (
      <>
        <>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Listas</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lista}
                label="Listas"
                onChange={(e)=>{setLista(e.target.value)}}
                placeholder="Seleccione una lista de ejercicios"
            >
                <MenuItem value="Lista 12.6">Lista 12.6</MenuItem>
                <MenuItem value="13.2">Lista 13.2</MenuItem>
                <MenuItem value="14.1">Lista 14.1</MenuItem>
                <MenuItem value="14.2">Lista 14.2</MenuItem>
                <MenuItem value="14.3">Lista 14.3</MenuItem>
                <MenuItem value="17.1">Lista 17.1</MenuItem>
                <MenuItem value="17.2">Lista 17.2</MenuItem>
                <MenuItem value="18.2">Lista 18.2</MenuItem>
                <MenuItem value="18.3">Lista 18.3</MenuItem>
                <MenuItem value="Simpson">Lista Regla de Simpson 1/3</MenuItem>
            </Select>
        </FormControl>
        </>
        <Typography>
            Si no se ven los PDFs puede verlos aqui <a style={{color:"blue"}} href='https://drive.google.com/drive/folders/1WwpRHq7Yda7FdP_d3i-uL8HMXDjtXMBh?usp=sharing'>https://drive.google.com/drive/folders/1WwpRHq7Yda7FdP_d3i-uL8HMXDjtXMBh?usp=sharing</a>
        </Typography>
        <br></br>
        <br></br>
        { lista !== undefined && <PDFLoader fileName={lista} ></PDFLoader>}
      </>
    
  )
}

