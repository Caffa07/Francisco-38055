alert("Bienvnido a Banco CCF");


let input = Number(prompt("Ingresa tu dni"));

while(input === 0){
    alert("dni no valido");
    input = Number(prompt("Ingresa tu dni"));
}

let birthYear = Number(prompt("Ingresar Año de nacimiento"));
let actualYear = 2022;
let result = actualYear-birthYear;

while(birthYear > 2004 || birthYear < 1950) {
            alert("Año no Valido");
            birthYear = Number(prompt("Ingresar Año de nacimiento"));
        }

    // Creacion de array de Objetos para usuarios
    const usuarios = [
        usiario1 = {
        dni: 37081504,
        nombre: "francisoco",
        apellido: "caffa",
    },
    usuario2 = {
        dni: 35714840,
        nombre: "raul",
        apellido: "messi",
    },
    usiario3 = {
        dni: 12255009,
        nombre: "laura",
        apellido: "stark",
    }
    
]

// Si recorido me da true sigo con los menu de opcionnes
if (recorido()) {
    // inicializo las variables a mostrar.
let saldo = 0;
let inputOP;

// Muestro el menu
// Mientras la opcion ingresada no sea cero, muestro resultado
// y repito el menu.
do {
    alert(`
    Ingrese una Opcion:
        1. Consultar saldo
        2. Retirar dinero
        3. Sollicitar Prestamo
        0. Salir`);
    inputOP = Number(prompt("Ingresa una Opcion"));
    switch (inputOP){
        case 0:
            alert("Gracias por su Visita");
        break;
        case 1:
            alert(`Tu saldo es de: ${saldo}`);
        break;
        case 2:
            alert(`No puede retirar dinero ya que su saldo es: ${saldo}`);
        break;
        case 3:
            alert(`Sollicitar Prestamo`)
            aprobarPrestamo();
        break;
        default:
            alert("Ingrese una opcion valida.");
        break;
    }
    
} while (inputOP !== 0);



function aprobarPrestamo(){
    // Aprobar monto ingresado.
    let montoIngresado = Number(prompt("Ingresar monto"));
    while((montoIngresado > 5000 || montoIngresado <= 0)){
        alert("El monto ingresado no fue aprobado. Puede solicitar un maximo de 5000.");
        montoIngresado = Number(prompt("Ingresar monto"))
    }

    // Aprobar cuotas ingresadas.
    let cuotasSolicitadas = Number(prompt("Elija las cantidad de cuotas"));
    while((cuotasSolicitadas > 24 || cuotasSolicitadas <= 0)){
        alert("La cantidad de cuotas es incorrecta. Puede pedir hasta 24 cuotas.");
        cuotasSolicitadas = Number(prompt("Elija las cantidad de cuotas"));
    }
    

    const result = montoIngresado / cuotasSolicitadas;
    alert("Su credito fue aprobado");
    alert("Te quedan $" + montoIngresado + " en " + cuotasSolicitadas + " cuotas de $" + result);
}
}else {
    alert(`El usuario No exsite.
            Desea crear un Usuario
            1. SI
            2. No
            0. Salir`);
        inputOP = Number(prompt("Ingresa una Opcion"));
        switch (inputOP){
            case 0:
                alert("Gracias por su Visita");
            break;
            case 1:
                alert(`Genial vamos a crearle un Usuario `);
                nuevoUsuario();
                const usuario4 = new nuevoUsuario(Number(prompt("Ingresa tu dni")), prompt("Ingresa tu nombre"), prompt("ingresa tu apellido"));
                usuarios.push(usuario4);
            break;
            case 2:
                alert(`No Podra ingresar a CCF`);
            break;
            default:
                alert("Ingrese una opcion valida.");
            break;
        }
}




// Funcion de nuevo usuario
function nuevoUsuario(dni, name, lastname) {
    this.dni = dni;
    this.nombre = name;
    this.apellido = lastname;
}
console.log(usuarios);



//Funcion para recorer array
function recorido() {
    let bandera;
  for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i].dni === input) {
      console.log("Entre");
        bandera = true;
      break;
    } else {
      break;
    }
  }
  return bandera;
};
