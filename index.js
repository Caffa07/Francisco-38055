function mostrarPresupuestos(presupuesto){
  const contenedorPresupuestos = document.getElementById("presupuestosContenedor");
  contenedorPresupuestos.innerHTML="";

  contenedorPresupuestos.innerHTML = `
  <h2>${presupuesto.titulo}</h2>
  <img src= "${presupuesto.imagen}">
  <br>
  <p><img src= "${presupuesto.descripcion}"></p>`; 
}
function botonAtras(){
   const botonAtras = document.createElement ("button");
   botonAtras.classList.add("boton-volver");
   botonAtras.innerText = "Atras";
   botonAtras.addEventListener("click", () => {
      mPresupuestos(presupuestos);
   })
   document.getElementById("presupuestosContenedor").prepend(botonAtras);
}
function crearBotonVerPresupuesto(presupuesto){
   const button = document.createElement("button");
   button.classList.add("boton-contacto");
   button.innerText = "Ver Presupuesto";
   button.addEventListener("click", () => {
       mostrarPresupuestos(presupuesto);
       botonAtras();
       botonContacto();
   })
   return button;
}
function mPresupuestos(presupuestos) {
   const contenedorPresupuestos =  document.getElementById("presupuestosContenedor");
   contenedorPresupuestos.innerHTML = ""

   presupuestos.forEach(presupuesto => {
        const divPresupuesto = document.createElement("div");
        divPresupuesto.classList.add("presup");
       divPresupuesto.innerHTML = `
       <h1>${presupuesto.titulo}</h1>
       <img src= "${presupuesto.imagen}">
       <br>
       `
       const botonVerPresupuesto = crearBotonVerPresupuesto(presupuesto);
       divPresupuesto.append(botonVerPresupuesto);
       contenedorPresupuestos.append(divPresupuesto);

    });
}
function botonContacto(){
  const botonContacto = document.createElement ("button");
  botonContacto.classList.add("boton-volver");
  botonContacto.innerText = "Contacto";
  botonContacto.addEventListener("click", () => {
    mostrarContacto();
    botonAtras();
  })
  document.getElementById("presupuestosContenedor").prepend(botonContacto);
}
function mostrarContacto(presupuesto){
  const contenedorContacto = document.getElementById("presupuestosContenedor");
  contenedorContacto.innerHTML="";
  
  contenedorContacto.innerHTML = ` 
<form id="mainContacto">
  <h2 class="h2Contacto">Hacé tu consulta</h2>
  <div class="d-grid gap-2 col-6 mx-auto">
      <input type="date" name="fecha" id="userDia"
  </div>
  <div class="d-grid gap-2 col-6 mx-auto">
      <input class="boton-volver" type="submit" value="Buscar">
  </div>    
</form>`; 
  // <section class="mainContainer container-fluid">
  // <div class="row">
  //         <div class="selectedDia col-sm-12 col-md-4 col-xl-4">
  //             <select id="userDia" class="form-select" aria-label="Default select example">
  //                 <option selected>Día</option>
  //                 <option value="1">1</option>
  //                 <option value="2">2</option>
  //                 <option value="3">3</option>
  //                 <option value="4">4</option>
  //                 <option value="5">5</option>
  //                 <option value="6">6</option>
  //                 <option value="7">7</option>
  //                 <option value="8">8</option>
  //                 <option value="9">9</option>
  //                 <option value="10">10</option>
  //                 <option value="11">11</option>
  //                 <option value="12">12</option>
  //                 <option value="13">13</option>
  //                 <option value="14">14</option>
  //                 <option value="15">15</option>
  //                 <option value="16">16</option>
  //                 <option value="17">17</option>
  //                 <option value="18">18</option>
  //                 <option value="19">19</option>
  //                 <option value="20">20</option>
  //                 <option value="21">21</option>
  //                 <option value="22">22</option>
  //                 <option value="23">23</option>
  //                 <option value="24">24</option>
  //                 <option value="25">25</option>
  //                 <option value="26">26</option>
  //                 <option value="27">27</option>
  //                 <option value="28">28</option>
  //                 <option value="29">29</option>
  //                 <option value="30">30</option>
  //                 <option value="31">31</option>
  //             </select>
  //         </div>
  //         <div class="selectedMes col-sm-12 col-md-4 col-xl-4">    
  //             <select id="userMes" class="form-select" aria-label="Default select example">
  //                 <option selected>Mes</option>
  //                 <option value="Enero">Enero</option>
  //                 <option value="Febrero">Febrero</option>
  //                 <option value="Marzo">Marzo</option>
  //                 <option value="Abril">Abril</option>
  //                 <option value="Mayo">Mayo</option>
  //                 <option value="Junio">Junio</option>
  //                 <option value="Julio">Julio</option>
  //                 <option value="Agosto">Agosto</option>
  //                 <option value="Septiembre">Septiembre</option>
  //                 <option value="Octubre">Octubre</option>
  //                 <option value="Noviembre">Noviembre</option>
  //                 <option value="Diciembre">Diciembre</option>
  //             </select>
  //         </div>
  //         <div class="selectedAño col-sm-12 col-md-4 col-xl-4">    
  //             <select id="userAño" class="form-select" aria-label="Default select example">
  //                 <option selected>Año</option>
  //                 <option value="2022">2022</option>
  //                 <option value="2023">2023</option>
  //                 <option value="2024">2024</option>
  //             </select>
  //         </div> 
  
      {/* </div>
  </section> */}
const botonVerPresupuesto = crearBotonVerPresupuesto(presupuesto);

}
function completarFormulario(e){
e.preventDefault();
// const selectedDay = document.getElementById("userDia").value;
// const selectedMonth = document.getElementById("userMes").value;
// const selectedYear = document.getElementById("userAño").value;
//   fechaElejida = {
//   selectedDay: selectedDay,
//   selectedMonth: selectedMonth,
//   selectedYear: selectedYear,
//   }
  // localStorage.setItem(fechaElejida, JSON.stringify(fechaElejida));
  
fechaElejida = document.getElementById("userDia").value;
  const listado = document.getElementById("listado");
  const listadoFechas = JSON.parse(localStorage.getItem(fechaElejida));
  if(listadoFechas == null){
      listado.innerHTML = "<h1>No Tenemos Consultas Para Esa Fecha</h1>"
  }else {
      mostrarListado(listadoFechas);
  }
  formulario();
}

function mostrarListado(listadoFechas){
  let listado = document.getElementById("listado");
  listado.innerHTML = "";
  
  listadoFechas.forEach(lista => {
      let li = document.createElement("li");
      li.innerHTML=`
      <h2>${lista.lounge} - ${lista.invited} - ${lista.name} - ${lista.lastname} -  ${lista.num} -
      </h2>
      `
      listado.appendChild(li);
  });
}
function formulario(){
  const form = document.getElementById("opciones");
  form.innerHTML = `
<form id="form-datos">  
  <div id="containerform">
        <h1>Dejanos Tus Datos y nos pondremos en contacto</h1>
    <div class="row">
        <div id="salon" class="selectedSalon col-sm-12 col-md-6 col-xl-6">
            <input class="form-control" type="text" placeholder="Salón" aria-label="default input example">
    </div>
        <div id="invitados" class="selectedInvitados col-sm-12 col-md-6 col-xl-6">
            <input class="form-control" type="text" placeholder="Cantidad aproximada de invitados" aria-label="default input example">
        </div>
    </div>
    <br>
    <div class="row">
        <div id="name" class="selectedNombre col-sm-12 col-md-4 col-xl-4">
            <input class="form-control" type="text" placeholder="Nombre" aria-label="default input example">
        </div>
        <div id="lastname" class="selectedApellido col-sm-12 col-md-4 col-xl-4">
            <input class="form-control" type="text" placeholder="Apellido" aria-label="default input example">
        </div>
        <div id="cell" class="selectedTelefono col-sm-12 col-md-4 col-xl-4">
            <input class="form-control" type="text" placeholder="Teléfono" aria-label="default input example">
        </div>
    </div>
    <br>
        <div class="d-grid gap-2 col-6 mx-auto">
        <button class="boton-volver" type="submit">Buscar</button>
        </div>
    <br>     
  </div>
</form>`
  
  document.getElementById("form-datos").addEventListener("submit", agregarFecha);
}


function agregarFecha(e){
  e.preventDefault();
  const lounge = document.getElementById("salon").value;
  const invited = document.getElementById("invitados").value;
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  // const day = document.getElementById("userDia").value;
  // const year = document.getElementById("userAño").value;
  // const month = document.getElementById("userMes").value;
  const num = document.getElementById("cell").value

  const listado = new Listado(lounge, invited, name, lastname);

  const localStorageFechas = JSON.parse(localStorage.getItem(fechaElejida));
  if(localStorageFechas == null){
      localStorage.setItem(fechaElejida, JSON.stringify([listado]));
      mostrarListado([listado]);
  } else{
    localStorageFechas.push(listado);
      localStorage.setItem(fechaElejida, JSON.stringify(localStorageFechas));
      mostrarListado(localStorageFechas);
  }
  e.target.reset();
}




////////////////////////////////////////////////////////////////////////////////////////
class Presupuesto {
  constructor(titulo, imagen, descripcion) {
      this.titulo = titulo;
      this.imagen = imagen;
      this.descripcion = descripcion;
  }
}
const presupuestos = [
  new Presupuesto("Presupuesto W4 1", "./img/Presupuesto1.jpg", "./img/EXCLUSIVO1-2023.jpg"),
  new Presupuesto("Presupuesto W4 2", "./img/Presupuesto2.jpg", "./img/EXCLUSIVO2-2023.jpg"),
  new Presupuesto("Presupuesto W4 Full", "./img/w4Full.jpg", "./img/EXCLUSIVOPACKFULL-2023.jpg"),
]

document.getElementById("presupuestosContenedor").addEventListener("submit", completarFormulario)

class Listado{
  constructor(lounge, invited, name, lastname, num){
      this.lounge = lounge;
      this.invited = invited;
      this.name = name;
      this.lastname = lastname;
      // this.day = day;
      // this.year = year;
      // this.month = month;
      this.num = num;
  }
}
let fechaElejida;
mPresupuestos(presupuestos);