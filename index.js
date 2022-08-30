alert("Bienvnido a Banco CCF");

let birthYear = Number(prompt("Ingresar Año de nacimiento"));
let actualYear = 2022;
let result = actualYear-birthYear;


while(birthYear > 2004 || birthYear < 1950) {
        alert("Año no Valido");
        birthYear = Number(prompt("Ingresar Año de nacimiento"));
    }
   


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
            cotizador();
        break;
        default:
            alert("Ingrese una opcion valida.");
        break;
    }
    
} while (inputOP !== 0);



function cotizador(){
    let monto = Number(prompt("Ingresar monto"));
    let cuotas = Number(prompt("Elija las cantidad de cuotas"));
   


    
    if (monto > 5000) {
        alert("Puedes Solicitar hasta $5000");
        
    } else {
        (cuotas <= 24) 
        
        alert("Son demasiadas  cuotas");
        cuotas = Number(prompt("Elija las cantidad de cuotas. Tienes hasta 24 cuotas"));   
    }
    for(let i=0; i <= 10; i++ ){
        const result = monto / cuotas;
        alert("Su credito fue aprobado");
        alert("Te quedan $" + monto + " en " + cuotas + " cuotas de " + result);
        break;
    }
    
}


