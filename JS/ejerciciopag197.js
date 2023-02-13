
//Ejercicio 2: escribe un programa que declare el siguiente objeto: { x: 1, y: 2 }. A 
//continuación, elimina la propiedad x y añade una propiedad nueva z con valor 5.

const valores = {
    x : 1, 
    y : 2
}
delete valores.x;
valores [z] = 5;
document.write(valores);

