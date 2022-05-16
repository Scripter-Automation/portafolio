

export const ExpresionSolver = (expresionData, fofx)=>{

    return ExpresionToMath(expresionData, fofx)



}

export const HilightSolver = (expresionData, fofx)=>{

    var values = ExpresionToMath(expresionData, fofx);
    var hilightedValues = []

    values.forEach((value)=>{
        if( expresionData.a <= value.x && value.x <= expresionData.b){
            hilightedValues.push(value)
        }else{
            hilightedValues.push({id:value.x, x:value.x, y:null})
        }
    })

    console.log("hilightedValues",hilightedValues)

    return hilightedValues




}


function ExpresionToMath(expresionData, fofx){
    
    var responseArray = []
    console.log(expresionData)

    switch(fofx){

        case("linear"):
            
            for(var x=expresionData.lowerBound; x <= expresionData.upperBound; x++){
                var y= expresionData.pendiente*x + expresionData.yint
                responseArray.push({id:x, x:x, y:y}) 
            }

            return responseArray
        
        break;
        case("trigonometric"):
            if (expresionData.trig = "sin"){
                for(var x=expresionData.lowerBound; x <= expresionData.upperBound; x++){
                   var y = Math.sin(x*Math.PI/180)
                   responseArray.push({id:x, x:x, y:y})
                }
                return responseArray

            }else if (expresionData.trig = "cos"){
                for(var x=expresionData.lowerBound; x <= expresionData.upperBound; x++){
                    var y = Math.cos(x*Math.PI/180)
                    responseArray.push({id:x, x:x, y:y})
                 }
                 return responseArray
            }else if (expresionData.trig = "tan"){
                for(var x=expresionData.lowerBound; x <= expresionData.upperBound; x++){
                    var y = Math.tan(x*Math.PI/180)
                    responseArray.push({id:x, x:x, y:y})
                 }
                 return responseArray
            }  else if (expresionData.trig = "cot"){
                for(var x=expresionData.lowerBound; x <= expresionData.upperBound; x++){
                    var y = 1/Math.tan(x*Math.PI/180)
                    responseArray.push({id:x, x:x, y:y})
                 }
                 return responseArray
            }else if (expresionData.trig = "csc"){
                for(var x=expresionData.lowerBound; x <= expresionData.upperBound; x++){
                    var y = 1/Math.sin(x*Math.PI/180)
                    responseArray.push({id:x, x:x, y:y})
                 }
                 return responseArray
            }else if (expresionData.trig = "sec"){
                for(var x=expresionData.lowerBound; x <= expresionData.upperBound; x++){
                    var y = 1/Math.cos(x*Math.PI/180)
                    responseArray.push({id:x, x:x, y:y})

                    
                 }
                 return responseArray
            }

        break;


    }

}