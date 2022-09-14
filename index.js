alert("Bienvnido a Banco CCF");

let input = Number(prompt("Ingresa tu dni"));

while (input === 0) {
  alert("dni no valido");
  input = Number(prompt("Ingresa tu dni"));
}


let birthYear = Number(prompt("Ingresar Año de nacimiento"));
let actualYear = 2022;
let result = actualYear - birthYear;

while (birthYear > 2004 || birthYear < 1950) {
  alert("Año no Valido");
  birthYear = Number(prompt("Ingresar Año de nacimiento"));
}

// Creacion de array de Objetos para usuarios
let usuarios = [
  ({
    dni: 37081504,
    nombre: "francisoco",
    apellido: "caffa",
  }),
  ({
    dni: 35714840,
    nombre: "raul",
    apellido: "messi",
  }),
  ({
    dni: 12255009,
    nombre: "laura",
    apellido: "stark",
  }),
];
//Le Agrego un filter para que si el Usuario Coincide lo vuelva a saludar
buscarCliente(input);

getUsuario();
// inicializo las variables a mostrar.
let inputOP;
let saldo = 0;


// Si recorido me da true sigo con los menu de opcionnes
if (recorido()) {
  
  // Muestro el menu
  // Mientras la opcion ingresada no sea cero, muestro resultado
  // y repito el menu.
  do {
    menuPrincipal();
  } while (inputOP !== 0);

  
} else {
  alert(`El usuario No exsite.
            Desea crear un Usuario
            1. SI
            2. No
            0. Salir`);
  inputOP = Number(prompt("Ingresa una Opcion"));
  switch (inputOP) {
    case 0:
      alert("Gracias por su Visita");
      break;
    case 1:
      alert(`Genial vamos a crearle un Usuario `);
      nuevoUsuario();
      const usuario4 = new nuevoUsuario(
        Number(prompt("Ingresa tu dni")),
        prompt("Ingresa tu nombre"),
        prompt("ingresa tu apellido"),
    );
        alert("usuario Creado")
      usuarios.push(usuario4);
      console.log(usuario4);
      do {
        menuPrincipal();
      } while (inputOP !== 0);
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

//Funcion para recorer array
function recorido() {
  let bandera;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].dni === input) {
      //console.log("Entre");
      bandera = true;
      break;
    } else {
      bandera = false;
    }
  }
  return bandera;
}
    //Funcion menu
    // Muestro el menu
    // Mientras la opcion ingresada no sea cero, muestro resultado
    // y repito el menu.
function menuPrincipal() {
  alert(`
    Ingrese una Opcion:
        1. Consultar saldo
        2. Retirar dinero
        3. Sollicitar Prestamo
        0. Salir`);
  inputOP = Number(prompt("Ingresa una Opcion"));
  switch (inputOP) {
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
      alert(`Sollicitar Prestamo`);
      aprobarPrestamo();
      break;
    default:
      alert("Ingrese una opcion valida.");
      break;
  }
}

//funcion para calcular prestamo
function aprobarPrestamo() {
  // Aprobar monto ingresado.
  let montoIngresado = Number(prompt("Ingresar monto"));
  while (montoIngresado > 5000 || montoIngresado <= 0) {
    alert(
      "El monto ingresado no fue aprobado. Puede solicitar un maximo de 5000."
    );
    montoIngresado = Number(prompt("Ingresar monto"));
  }

  // Aprobar cuotas ingresadas.
  let cuotasSolicitadas = Number(prompt("Elija las cantidad de cuotas"));
  while (cuotasSolicitadas > 24 || cuotasSolicitadas <= 0) {
    alert(
      "La cantidad de cuotas es incorrecta. Puede pedir hasta 24 cuotas."
    );
    cuotasSolicitadas = Number(prompt("Elija las cantidad de cuotas"));
  }

  const result = montoIngresado / cuotasSolicitadas;
  alert("Su credito fue aprobado");
  alert(
    "Te quedan $" +
      montoIngresado +
      " en " +
      cuotasSolicitadas +
      " cuotas de $" +
      result
  );
}

function buscarCliente(dni) {
  usuarios = usuarios.filter(usuario => usuario.dni === dni);
  console.log(usuarios);
}
function getUsuario() {
  usuarios.forEach((usuarios) => alert("Hola! " + usuarios.nombre));
}
