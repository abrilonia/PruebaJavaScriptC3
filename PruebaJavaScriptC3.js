/*Ejercicio 1. Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.*/

function preciosMarJue(dia){
    //se ingresa el día de la semana y la función actualizará los precios
    var precios=[1000,2000,500,1500,800];
    var precioOferta = [];
    if (dia == "martes" || dia == "jueves"){
        //se actualizan los precios si es martes o jueves 
        precios.forEach(x => precioOferta.push(x*0.8));
        return precioOferta;
        console.log(precioOferta);
    
            
        }else{
            return precios;
            console.log(precios);
        }

    }
preciosMarJue("martes");

/*Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento*/

function oferta2(array){

    var valor;
    if (array.length>3 && valor>10000){

    }
    
}

/*Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.*/



/*Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto 
Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso */


//esta funcion comprueba el valor mas alto de un arreglo dado
function masCostoso(arreglo){
    var masAlto = arreglo[0];
    for (i=0; arreglo.length>i; i++){
        if (masAlto < arreglo[i]) {
            masAlto = arreglo[i];
        } return masAlto;
        console.log(masAlto);
    }
}
masCostoso([00,5500,900,7000,500,300]);
