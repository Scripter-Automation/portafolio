

    import React, {useEffect} from "react"
    import { Line } from 'react-chartjs-2';
    import Chart from 'chart.js/auto';
import { ExpresionSolver, HilightSolver } from "./Algoritmos";
    
    
    export default function DynamicGraph({expresion, fofx}) {
        const [displayData, setdisplayData] = React.useState()
       
       useEffect(() => {
         
           var data = ExpresionSolver(expresion, fofx)
           var hilight = HilightSolver(expresion, fofx)
           setdisplayData({  
               labels: data.map((data)=> data.x),
               datasets: [{
                   
                   label: "",
                   data: data.map((data) => data.y),
                   backgroundColor: "#1976d2",
                   borderColor: "#1976d2",
                   
    
               },{
                   label:"",
                   fill:"origin",
                   data: hilight.map((data) => data.y),
                   backgroundColor: "#1976d2",
                   borderColor: "#1976d2",
               }
            
           ]})
       
        }
    
       ,[])
    
      
       
     
       
       if(displayData !== undefined){
           console.log("display Data", displayData)
           return(
       <div>
       <Line
       height="75px"
       data={displayData}
       options={{
        plugins: {
            legend: {
            display:false
            }}
        }}
       />
       </div>
       )
       }else{return null}
    }

