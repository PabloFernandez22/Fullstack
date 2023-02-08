const dia = "Lunes"; 
switch (dia) {
    case "Lunes":
        document.write("Hoy es Lunes");
        break;
    case "Martes":
        document.write("Hoy es Martes");
        break;
    case "Miercoles":
        document.write("Hoy es Miercoles");
        break;
    case "Jueves":
        document.write("Hoy es Jueves");
        break;
    case "Viernes":
        document.write("Hoy es Viernes");
        break;
    case "Sabado":
        document.write("Hoy es Sabado");
        break;
    default: 
    document.write("Hoy es Domingo)");
        break;
}






let fecha = new Date();
let mes = fecha.getMonth();
switch (mes) {
    case 0:
        document.write("Enero");
        break;
    case 1:
        document.write("Febrero");
        break;
    case 2:
        document.write("Marzo");
        break;
    case 3:
        document.write("abril");
        break;
    case 4:
        document.write("Mayo");
        break;
    case 5,6,7,8:
        document.write("Mas alla de Mayo");
        break;

    default: ("No es valido");
        break;
}