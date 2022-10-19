console.log('Ejercicio 3');

function betterThanAverage(arr) {
    let sum = 0;
    // calcula el promedio
    let count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    for ( i=0 ; i<arr.length ; i++ ){
        sum += arr[i];
    }

    for ( i=0 ; i<arr.length ; i++ ){
        if ( arr[i] > (sum / arr.length) ){
            count++;
        }
    }

    return count;
}
let result3 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result3); // esperamos 4 de vuelta
