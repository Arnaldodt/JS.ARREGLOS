console.log('Ejercicio 1');

function siempreHambriento(arr) {
    console.log(arr);
    let mensaje = '';
    for ( i=0 ; i<arr.length ; i++ ){
        if ( arr[i] === 'comida'){
            mensaje = 'delicioso';
            console.log(mensaje);
        }
    }
    if (mensaje === ''){
        mensaje = 'Tengo hambre';
        console.log(mensaje);
    }
}
   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
