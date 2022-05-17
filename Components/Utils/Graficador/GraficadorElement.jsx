import React, {useState} from 'react'
import DynamicGraph from '../../Graphs/Dynamic Graphs/DynamicGraph'
import GraphingForm from '../GraphingForm'


export default function GraficadorElement() {
    const [graph, setGraph] = useState(undefined)
    const [graphData, setgraphData] = useState(undefined)
    const [display, setDisplay] = useState(false)

    console.log("display previous",display)

  return (
    <>
        <GraphingForm isdisplayed={display} display={setDisplay} data={setgraphData} graph={graph} setGraph={setGraph} existingData={graphData}></GraphingForm>
       { display === true &&  <DynamicGraph fofx={graph} expresion={graphData}>
        </DynamicGraph>}
    </>
  )
}
