const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// Función que se ejecuta al hacer click en el botón, en HTML ES onclick="" o onchange=""

// btn.addEventListener('click', btnOnClick); primero va lo que queremos que escuche, en este caso el click. Luego tenemos que poner lo que queremos que se ejecute, la funcion btnOnClick
// nunca se le ponen los parentesis a la funcion, pq el evento lo que hace es ir a buscar la funcion cuando hacemos click, al encontrarla la ejecuta "agregandole los paréntesis". si le pusieramos los paréntesis, al hacer click se ejecutaria la funcion y otra vez despues

// function btnOnClick() {
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "resultaado: " + sumaInputs
// }


// vemos el uso de los formularios. Lo que debemos hacer esconfigurarlo, ya que el formulario toma por defecto que el ultimo boton va a llevar todos los datos que el usuario pone a una url distinta, por lo que recarga toda la pagina
// no necesita escuchar el click, necesita escuchar el evento submit
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    // para que no recargue la pagina
    // console.log({event});
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "resultaado: " + sumaInputs;
}
// para que no recargue la pagina, tenemos que poner el preventDefault agregando como parametro el evento en la funcion
