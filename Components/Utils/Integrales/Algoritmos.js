export const IntegralSolver = (fofx, data)=>{
    var expresion;
    var AntiA;
    var AntiB;

    switch(fofx){
        case("linear"):
            expresion = `(${data.pendiente}/2)*x^2+ ${data.yint}*x`
            AntiA = (data.pendiente/2)*(data.a**2)+ data.yint*data.a
            AntiB = (data.pendiente/2)*(data.b**2)+ data.yint*data.b

            return {expresion:expresion, AntiA:AntiA, AntiB,AntiB}

        break;
        case("trigonometric"):
            if(data.trig === "sin"){
                expresion = `${data.amplitud}*cos(x)+ ${data.yint}*x`
                AntiA = data.amplitud*Math.cos(data.a) + data.yint*data.a
                AntiB = data.amplitud*Math.cos(data.b) + data.yint*data.b
                return {expresion:expresion, AntiA:AntiA, AntiB,AntiB}
            }else if(data.trig === "cos"){
                expresion = `-${data.amplitud}*sin(x)+ ${data.yint}*x`
                AntiA = -data.amplitud*Math.sin(data.a) + data.yint*data.a
                AntiB = -data.amplitud*Math.sin(data.b) + data.yint*data.b
                return {expresion:expresion, AntiA:AntiA, AntiB,AntiB}
            }

        break;
        case("E^x"):
            expresion = `(${data.amplitud}/${data.n})*e^(${data.n}*x)+${data.yint}*x`;
            AntiA= (data.amplitud/data.n)* Math.E ** (data.a*data.n) + data.yint*data.a; 
            AntiB= (data.amplitud/data.n)* Math.E ** (data.b*data.n) + data.yint*data.b;
            return {expresion:expresion, AntiA:AntiA, AntiB,AntiB}
        break;

    }

}