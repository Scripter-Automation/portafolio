import React, {useState} from 'react'
import DynamicGraph from '../Dynamic Graphs/DynamicGraph'
import GraphingForm from '../../Utils/GraphingForm'

export default function PorPartesM1() {
    const [graph, setGraph] = useState(undefined)
    const [graphData, setgraphData] = useState(undefined)
    const [display, setDisplay] = useState(false)

  return (
    <>
        
        <GraphingForm display={setDisplay} data={setgraphData} graph={graph} setGraph={setGraph} existingData={graphData}></GraphingForm>
       { display === true &&  <DynamicGraph fofx={graph} expresion={graphData}>
        </DynamicGraph>}
    </>
  )
}
