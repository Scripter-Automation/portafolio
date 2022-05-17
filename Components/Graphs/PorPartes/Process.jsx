import { Typography } from '@mui/material'
import React from 'react'
import { IntegralSolver } from '../../Utils/Integrales/Algoritmos'

export default function Process({graph, data, display, existingData, setGraph}) {

  const [solver, setSolver] = React.useState(undefined)
  
  React.useEffect(() => {
    var integral = IntegralSolver(graph,existingData)
    setSolver({...integral})
  }, [])
  
  

  return (
    <>
      <Typography sx={{m:2, fontsize:"14px"}}>Primero hay que calcular la integral indefinida, la cual en este caso es <b>{solver !== undefined && solver.expresion}</b>  </Typography>
      <Typography sx={{m:2, fontsize:"14px"}}>Despues, evaluar F(b) donde F es la antiderivada de f(x). En este ejemplo <b>F({existingData.b}) = {solver !== undefined && solver.AntiB}</b></Typography>
      <Typography sx={{m:2, fontsize:"14px"}}>luego, evaluar F(a) . En este ejemplo <b>F({existingData.a}) = {solver !== undefined && solver.AntiA}</b></Typography>
      <Typography sx={{m:2, fontsize:"14px"}}>La integral sera la resta F(b)-F(a) lo cual en este ejemplo seria <b>F({existingData.b})-F({existingData.a})={solver !== undefined && solver.AntiB-solver.AntiA}</b> </Typography>
    </>
  )
}
