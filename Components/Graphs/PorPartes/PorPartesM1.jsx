import React, {useState} from 'react'
import DynamicGraph from '../Dynamic Graphs/DynamicGraph'
import GraphingForm from '../../Utils/GraphingForm'
import { Typography } from '@mui/material'

export default function PorPartesM1() {
    const [graph, setGraph] = useState(undefined)
    const [graphData, setgraphData] = useState(undefined)
    const [display, setDisplay] = useState(false)

    console.log("display previous",display)

  return (
    <>
        <Typography>Seleccióna el tipo de grafica que deseas integrar. Obtendras su integral definida e indefinida al igual que una grafica de la funcion original. Espero disfrute la grafica, ya que funciona mediante algoritmos creados por nosotros. (intentamos replicar a geogebra... si hicimos nuestro propio graficador)</Typography>
        <GraphingForm isdisplayed={display} display={setDisplay} data={setgraphData} graph={graph} setGraph={setGraph} existingData={graphData}></GraphingForm>
       { display === true &&  <DynamicGraph fofx={graph} expresion={graphData}>
        </DynamicGraph>}
    </>
  )
}
