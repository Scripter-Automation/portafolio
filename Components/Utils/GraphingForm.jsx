import React, {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Typography, Button } from '@mui/material';
import LinearFuncForm from "./Forms/LinearFuncForm"



    export default function GraphingForm({graph, setGraph, data, display, existingData}) {
    
        
    
      return (
        <>
         <>
                <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{minWidth: 120, m: 1}}>
                <InputLabel id="function">function</InputLabel>
                <Select
                labelId="function"
                id="function"
                onChange={(e)=>{setGraph(e.target.value)}}
                label="function"
                
                >
                <MenuItem value="linear">y=mx+b</MenuItem>
                <MenuItem value="trigonometric">Trigonometrica</MenuItem>
                <MenuItem value="E^x">E^x</MenuItem>
                </Select>
            </FormControl>
            </Box>
        </>
            {graph === "linear" && <LinearFuncForm setGraph={setGraph} graph={graph} data={data} display={display} existingData={existingData}></LinearFuncForm>}
            {graph === "trigonometric" && <TrigFuncForm graph={graph} data={data} display={display} existingData={existingData}></TrigFuncForm>}
        </>
      )
    }
