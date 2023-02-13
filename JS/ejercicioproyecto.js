let gestor = {
    nombre: "Pepito",
    dinero:200,
    numero: "Cuenta X"
};
let cliente = {
    nombre: "Juanito",
    numCuenta: 8126937492,
    saldoDisponible: 300
};
let mensaje = {
    emisor: "Juanito",
    receptor: "Pepito",
    mensaje: "Hola gestor"
};
let transferencia = {
    emisor:232424,
    receptor: 335466,
    dineroTransferencia: 400
};

//Ejercicio 2 Proyecto
let gestor3 = Object.keys(gestor);
for (const key of gestor3) {
    console.log(key);
};
let cliente3 = Object.keys(cliente);
for (const key of cliente3) {
    console.log(key);
};
let mensaje3 = Object.keys(mensaje);
for (const key of mensaje3) {
    console.log(key);
};