import React, {useEffect} from "react"
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';



const ConstantFunc = ()=> {
     const [displayData, setdisplayData] = React.useState()
    
    useEffect(() => {
        var data = populateData()
        setdisplayData({  
            labels: data.map((data)=> data.xvalue),
            datasets: [{
                
                label: "f(x)=3",
                data: data.map((data) => data.value),
                backgroundColor: "red",
                borderColor: "red",
                

            },
            {
            fill:"origin",
            label:"Intervalo [0-3]",
            data: [3,3,3,3],
            backgroundColor:"red",
            borderColor:"red"
            }
        ]})

    },[])

    function populateData(){
        var array = []
        for(var x = 0; x<10;x++){
            array.push( {id: x, value: 3, xvalue:x})
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
    />
    </div>
    )
    }else{return null}
}

export default ConstantFunc
