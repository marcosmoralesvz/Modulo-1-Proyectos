const comentario =

document.getElementById(
"comentario"
);

const boton =

document.getElementById(
"agregar"
);

const lista =

document.getElementById(
"lista"
);

const contador =

document.getElementById(
"contador"
);

let total = 0;




function actualizarContador(){

contador.innerText =

`Comentarios: ${total}`;

}




function crearComentario(){


let texto =

comentario.value.trim();



if(
texto === ""
){

alert(
"Escribe un comentario"
);

return;

}



let bloque =

document.createElement(
"div"
);

bloque.className =
"comentario";



let fecha =

new Date()
.toLocaleString(
"es-MX"
);




bloque.innerHTML =

`

<p>

${texto}

</p>


<div class="fecha">

Publicado:

${fecha}

</div>


<button
class="eliminar">

Eliminar

</button>

`;




bloque

.querySelector(
".eliminar"
)

.addEventListener(

"click",

function(){

bloque.remove();

total--;

actualizarContador();

}

);




lista.appendChild(
bloque
);




comentario.value="";



total++;

actualizarContador();


}




boton
.addEventListener(

"click",

crearComentario

);




comentario
.addEventListener(

"keydown",

function(e){

if(
e.ctrlKey
&&
e.key==="Enter"
){

crearComentario();

}

}

);