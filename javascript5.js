console.log('Ejercicio 5');

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    let fibArr = [];
    // tu código aquí
    
    for ( i=0 ; i<n ; i++ ){
        if (i<2){
            fibArr.push(i)
        }else{
            fibArr.push(fibArr[i-2] + fibArr[i-1]);
        }
    }

    return fibArr;
}
   
var result5 = fibonacciArray(10);
console.log(result5); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
