import React from 'react'
import Typography from '@mui/material/Typography'
import ConstantFunc from '../Components/Graphs/Introducción/constantFunc'
import LinearFunc from "../Components/Graphs/Introducción/LinearFunc"


export default function Introduccion() {
  return (
    <>
    <Typography variant="h1" align="center">
        Introducción
    </Typography>

    <Typography variant="h3">
        ¿Qué es una Integral?
    </Typography>
    <Typography>
        Las integrales son el area bajo la curva de una grafica. Esto significa que si tu tomas una grafica, agaras un intervalo de [x,x+n] donde 
        n es un numero arbitrario. y el resultado de este es multiplicado por la altura de la función. A continuación veremos un ejemplo muy basico
        de la funcion f(x)=3 en el intervalo [0,3]. En este ejemplo el area sombreada es el area de interes, y para calcular el valor de esta integral
        es bastante sencillo. Debido a que esta es una función constante, se puede calcular su valor usando la ecuación del rectángulo.
    </Typography>
    <br></br>
    <Typography variant="body1" color="initial">
        Usando esta logica debemos primero definir la base y la altura. Este ejercicio nos servira para establecer los principios basicos de la sumas de Riemann.
        Para definir la base podemos fijarnos en el intervalo que tenemos, ya que tenemos que el area comienza en x=0 y termina en x=3, por lo tanto la distancia
        del area se puede tomar como la base del rectángulo. Entonces la base = 3-0 = 3. Generalizando podemos definir la base como a-b donde a es el paramentro
        menor del intervalo y b el parámatro mayor del intervalo.
    </Typography>
    <br></br>
    <ConstantFunc></ConstantFunc>

    <br></br>
    <Typography>
        Ahora para calcular la altura, se va a ocupar la imagen. Como en este caso la función es contante, entonces la altura es constante. 
        Por lo tanto como f(x)= 3 entonces la altura es 3. Y multiplicandolo por la base nos da 9. Esta seria la integral de f(x) en el intervalo 
        [0-3]. Lo cual es probablemente la integral mas sencialla que hay. Por lo tanto hay que encontrar metodos para funciones mas complejas.
        Pero en la antiguedad se utilizaban las sumas de Riemann
    </Typography>
    <br></br>
    <Typography variant="h3">
        Sumas de Riemann
    </Typography>
    <Typography>
        Este método de integración es uno de los mas antiguos, y actualmente ya existen métodos mas sencillos para encontrar integrales, pero es
        importante conocerlo ya que este método se utilizará despues tambien en figuras en 3D y también porque nos ayuda a comprender como es
        que se utilizaban las integrales en el pasado. Para explicarlo utilizaremos una función lineal. A comparación del ejemplo anterior, la altura
        del área bajo la curva ya no es constante, por lo cual se debe ajustar nuestra manera de calcular esta área. Aun se seguirán utilizando rectángulos
        y la ecuación del rectángulo, pero para poder conseguir la altura, deberemos partir el intervalo en particiones, las cuales entre mayores sean
        más cerca estaremos de obtener la verdadera área bajo la curva.
    </Typography>
    <br></br>
    <LinearFunc type={"lower"}></LinearFunc>
    <br></br>
        <Typography>
            En este caso, una partición por cada valor de x en el intervalo. Si contamos los rectángulos son 4 particiones. Por lo tanto, tenemos 5 rectángulos,
            estos teniendo una base de x<sub>i</sub> - x<sub>i -1</sub>. Por ejemplo, hagamos el primer rectángulo. Este tiene una base de 4-3 = 1 y tiene una altura
            de 3 o 4. Esto depende de cuál de los métodos estemos usando, ya sea sumas inferiores o superiores. Para este caso haremos sumas inferiores, por lo tanto
            la altura de f(3) = 3 y tenemos que el área del primer rectángulo es 1*3. Ahora tenemos que repetir el mismo proceso para el resto de los demás rectángulos.
            Entonces la integral de esta función seria la suma de estos rectángulos, por lo cual si lo generalizamos, podemos comenzar a conseguir una ecuación, la cual
            es conocida como las sumas de Riemann

        </Typography>
    <br></br>
    <Typography>
    Como es una suma de rectángulos, donde la base se define como la distancia entre x<sub>i</sub> - x<sub>i-1</sub> y la altura es el valor de f(x) donde x será
        el valor ínfimo o supremo de la partición. Entonces podemos decir que la integral es la sumatoria de la base por la altura de cada partición. Pero para calcular la base
        tenemos que generalizar su ecuación. Como tenemos que la base de dado rectángulo es x<sub>i</sub> - x<sub>i-1</sub> podemos generalizarlo, ya que esta distancia, será la misma
        a que si tomamos la distancia del intervalo y lo dividimos entre la cantidad de particiones. Por ejemplo, en el caso anterior tenemos 4 particiones y el intervalo abarca del 3 al 7.
        Entonces (7-3)/4 = 1 lo cual nos da lo mismo que la distancia entre 3 y 4, 4 y 5, 5 y 6, 6 y 7. Por lo tanto podemos generalizar que x<sub>i</sub> - x<sub>i-1</sub> es igual a la siguiente ecuación.

    </Typography>
    <center><img src='xi-xi-1.png'></img></center>

    <Typography>
    Ahora con el valor de las bases definidas, solo falta conseguir las alturas, las cuales habíamos definido que serían los valores de x dependiendo de si se estaban haciendo las sumas inferiores o las superiores.
       En la gráfica anterior se estaba usando el ejemplo de las sumas inferiores, en el cual se toma el valor ínfimo de f(x) en el intervalo de la partición observada.
       Para las sumas superiores se tomará el valor supremo, el cual puedes observar su ejemplo en la siguiente grafica.
    </Typography>
    <br></br>
    <LinearFunc type={"upper"}></LinearFunc>
    <br></br>
    <Typography>
    La combinación del resultado de ambas sumas nos da un intervalo, en el cual se encuentra la respuesta de la integral. Estas ecuaciones son conocidas como las sumas de Riemann
        las cuales se denominas sumas inferiores [L(f,p)] y sumas superiores [U(f,p)]. Como Unas contienen el menor valor y las otras contienen el mayor valor, la integral se encontrará en
        la diferencia de estas sumas al igual que se puede calcular mediante limites, una vez que se comprueba que la función es integrable.
    </Typography>
    <center><img src="SumasReimann.png"></img></center>
    <Typography variant="h3">
        Resolviendo para f(x)=x
    </Typography>
    <br></br>
    <Typography>
    Aunque podemos ir sumando el área de todos los rectángulos, es más fácil utilizar algebra ya que se puede utilizar la ecuación de suma aritmética de números enteros.
        A continuación, podrá ver la demostración tanto para la suma inferior como la superior. Esto estará realizado de manera algebraica y al final se mostrará utilizando este
        método la respuesta a la integral de f(x).
    </Typography>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <img src='intro1.png'></img>
    <img src="intro2.png"></img>
    <img src='intro3.png'></img>
    <img src="intro4.png"></img>
    <img src='intro5.png'></img>
    </div>

    </>
  )
}
