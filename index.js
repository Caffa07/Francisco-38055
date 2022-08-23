alert("Bienvnido a Banco CCF");

let birthYear = Number(prompt("Ingresar Año de nacimiento"));
let actualYear = 2022;
let result = actualYear-birthYear;

let inputOP;
let saldo = "0";
while(birthYear > 2004 || birthYear < 1950) {
        alert("Año no Valido");
        birthYear = Number(prompt("Ingresar Año de nacimiento"));
    }
   


