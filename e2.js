/* Ejercicio 2

Escribe una función llamada `frecuencias` que reciba una cadena de texto y 
retorne un objeto con el número de veces que aparece cada caracter
 (exceptuando el espacio en blanco) */

 function frecuencias(str){
    let answereObject = {}
    for (let i = 0; i<str.length; i++){
        if(answereObject[str[i]] === undefined && str[i] !== " "){
            answereObject[str[i]] = 1 
        } else if ( str[i] !== " " ) { 
            answereObject[str[i]] += 1
        }
    }
return answereObject
}

console.log("Ejercicio 2 frecuencia letras en objeto")
console.log(frecuencias("hola mundo"));
//{ h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
console.log(frecuencias("anita lava la tina"));
//{ a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 } 