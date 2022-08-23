/*Ingresar un año de nacimiento para ingresar a la web ya que es para mayores de edad*/
alert("Bienvnido a Banco CCF");
const birthYear = Number(prompt("Ingresar Año de nacimiento"));
const actualYear = 2022;


if (actualYear-birthYear >= 18 && birthYear === " " ){
    alert("Ingresaste al banco CCF");
} else {
    alert("Pagina no habilitada para menores de 18 años");
}


// let inputValue = prompt("Ingrese el nombre de la pagina");
// let couter = 0;

// while(inputValue != "coder" && couter !==2) {
//     alert ("Ingresaste " + inputValue);
//     inputValue = prompt("Ingrese el nombre de la pagina");
//     alert ("Ingresaste " + inputValue + " te quedan 2 intentos");
//     inputValue = prompt("Ingrese el nombre de la pagina");
//     alert ("Ingresaste " + inputValue + " te quedan 1 intentos");
//     inputValue = prompt("Ingrese el nombre de la pagina");
//     couter++;
//     alert("Te quedaste sin intentos");
// }
const inputValue = Number(prompt("Ingrese  un numero"));

for (let i = 0; i <= 10; i++) {
    const result = i * inputValue;
    alert("El resultado de " + i + " * " + inputValue + " es " + result );
}