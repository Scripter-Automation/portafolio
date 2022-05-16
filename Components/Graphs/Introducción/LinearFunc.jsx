import React, {useEffect} from "react"
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const LinearFunc = ({type})=> {
    const [displayData, setdisplayData] = React.useState()
   
   useEffect(() => {
       if(type === "lower"){
       var data = populateData()
       setdisplayData({  
           labels: data.map((data)=> data.xvalue),
           datasets: [{
               
               label: "f(x)= x",
               data: data.map((data) => data.value),
               backgroundColor: "red",
               borderColor: "red",
               

           },
           {
           fill:"origin",
           label:"",
           data: [null,null,null,3,3,null,null,null,null,null,null],
           backgroundColor:"red",
           borderColor:"red",
           useFinalPosition:true
           },
           {
            fill:"origin",
            label:" ",
            data: [null,null,null,null,4,4,null,null,null,null,null],
            backgroundColor:"red",
            borderColor:"red",
            useFinalPosition:true
            },   
            {
                fill:"origin",
                label:" ",
                data: [null,null,null,null,null,5,5,null,null,null,null],
                backgroundColor:"red",
                borderColor:"red",
                useFinalPosition:true
            },
            {
                fill:"origin",
                label:" ",
                data: [null,null,null,null,null,null,6,6,null,null,null],
                backgroundColor:"red",
                borderColor:"red",
                useFinalPosition:true
            }
       ]})
    }else if(type = "upper"){
        var data = populateData()
        setdisplayData({  
            labels: data.map((data)=> data.xvalue),
            datasets: [{
                
                label: "f(x)= x",
                data: data.map((data) => data.value),
                backgroundColor: "red",
                borderColor: "red",
                
 
            },
            {
            fill:"origin",
            label:"",
            data: [null,null,null,4,4,null,null,null,null,null,null],
            backgroundColor:"red",
            borderColor:"red",
            useFinalPosition:true
            },
            {
             fill:"origin",
             label:" ",
             data: [null,null,null,null,5,5,null,null,null,null,null],
             backgroundColor:"red",
             borderColor:"red",
             useFinalPosition:true
             },   
             {
                 fill:"origin",
                 label:" ",
                 data: [null,null,null,null,null,6,6,null,null,null,null],
                 backgroundColor:"red",
                 borderColor:"red",
                 useFinalPosition:true
             },
             {
                 fill:"origin",
                 label:" ",
                 data: [null,null,null,null,null,null,7,7,null,null,null],
                 backgroundColor:"red",
                 borderColor:"red",
                 useFinalPosition:true
             }
        ]})
    }

   },[])

   function populateData(){
       var array = []
       for(var x = 0; x<10;x++){
           array.push( {id: x, value: x, xvalue:x})
       }
       return array

   }
   
 
   
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

export default LinearFunc