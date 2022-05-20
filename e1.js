//https://paper.dropbox.com/doc/Ejercicios-preparacion-Programa-TOP-MJeEWuBCj2uZC5xyDuppr

/* Ejercicio 1

Escribe una función llamada `numDuplicados` que reciba un string y
retorne el número de caracteres que aparecen más de una vez.
// si una letra especifica  del str se repite mas de una vez sumarla al contador 
*/

function numDuplicados(str){
    let answereObject = {}
    let count = 0
      for (let i = 0; i<str.length; i++){
          if(answereObject[str[i]] === undefined){
              answereObject[str[i]] = 1 
          } else { 
              answereObject[str[i]] += 1; 
          } 
      }
      for(let key in answereObject){ 
        if(answereObject[key] > 1){
          count += 1
        }
      }
    return count
  }

console.log("Ejercicio 1 número de letras repetidas")
console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0  
