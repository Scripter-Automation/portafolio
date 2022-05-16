
import { TextField, Typography, Button, Box } from '@mui/material';

const LinearFuncForm = ({data, display, existingData, setGraph }) =>{

    

    return(
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
        type="number"
        inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
        onChange={(e)=>{data({...existingData, lowerBound: parseInt(e.target.value)})}}
        id="lowerBound" label="Lower Bound" variant="standard" />

        <TextField id="Upper Bound" label="Upper Bound" variant="standard"
        type="number"
        inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
        onChange={(e)=>{data({...existingData, upperBound: parseInt(e.target.value)})}}
        />
        <TextField id="M" label="m" variant="standard" 
            type="number"
            inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
            onChange={(e)=>{data({...existingData, pendiente: parseInt(e.target.value)})}}
        />
        <TextField id="yint" label="y-intercept" variant="standard" 
            type="number"
            inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
            onChange={(e)=>{data({...existingData, yint: parseInt(e.target.value)})}}
        />
        <TextField id="A" label="a" variant="standard" 
            type="number"
            inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
            onChange={(e)=>{data({...existingData, a: parseInt(e.target.value)})}}
        />
        <TextField id="B" label="b" variant="standard" 
            type="number"
            inputProps={{ inputMode: 'numeric', pattern:"^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$" }}
            onChange={(e)=>{data({...existingData, b: parseInt(e.target.value)})}}
        />
        <Button 
        onClick={()=>{display(true)}}
        variant="contained" color="success">
          Ejecutar
        </Button>
        <Button 
        onClick={()=>{display(false); data(undefined); setGraph(undefined)}}
        variant="contained" color="error">
          Reiniciar
        </Button>

        <center style={{width:"auto"}}><img src="linearDemo.png"></img></center>
        <Typography align='center' style={{width:"auto"}}>
            donde y es la intersección con el eje y <br></br>
            Lower y Upper bound son el area que quieres ver en la grafica <br></br>
            b,a son el area sombreada de la cual quieres la integral
        </Typography>

      </Box>
    )
}

export default LinearFuncForm