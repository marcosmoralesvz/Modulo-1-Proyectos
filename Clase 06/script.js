let boton =
document.getElementById("agregar");

let caja =
document.getElementById("comentario");

let lista =
document.getElementById(
"listaComentarios"
);



boton.addEventListener(
"click",

function(){

let texto =
caja.value.trim();


if(texto===""){

alert(
"Escribe un comentario"
);

return;

}


let comentario =
document.createElement(
"div"
);

comentario.className =
"comentario";


let fecha =
new Date();

comentario.innerHTML=

`
<p>${texto}</p>

<div class="fecha">

Publicado:

${fecha.toLocaleString()}

</div>

<button class="eliminar">

Eliminar

</button>

`;


comentario
.querySelector(
".eliminar"
)

.addEventListener(

"click",

function(){

comentario.remove();

}

);


lista.appendChild(
comentario
);


caja.value="";

}

);