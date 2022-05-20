/* Ejercicio 3
Crea una función llamada `caracteresEnComun` que recibe dos argumentos: `str1` y `str2`. 
La función debe retornar un arreglo con todos los caracteres que las dos cadenas 
tienen en común. */

function caracteresEnComun(str1, str2){
    let arrayRepetedCharacters = []; 
    for(let i=0; i<str1.length; i++){
      for(let j=0; j<str2.length; j++){
        if(str1[i] === str2[j] && arrayRepetedCharacters.indexOf(str1[i]) === -1){
          arrayRepetedCharacters.push(str1[i])
        }
      }
    }
    return arrayRepetedCharacters
  }
console.log("Ejercicio 3")
console.log(caracteresEnComun("Hola", "Mundo")) // ["o"]
console.log(caracteresEnComun("German", "Gabriela")) // ["G", "e", "r", "a"]
console.log(caracteresEnComun("Hola", "Bye")) // []
