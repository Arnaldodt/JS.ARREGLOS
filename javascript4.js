console.log('Ejercicio 4');

function reverse(arr) {
    // tu código aquí
    let arrnew = [];

    for ( i=arr.length-1 ; i>=0 ; i-- ){
        arrnew.push(arr[i]);
    }

    return arrnew;
}
   
var result4 = reverse(["a", "b", "c", "d", "e"]);
console.log(result4); // esperamos de vuelta ["e", "d", "c", "b", "a"]
