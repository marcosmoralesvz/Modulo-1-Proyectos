// ELEMENTOS

const salida =
document.getElementById(
"password"
);

const rango =
document.getElementById(
"longitud"
);

const valor =
document.getElementById(
"valor"
);

const nivel =
document.getElementById(
"nivel"
);

const botonGenerar =
document.getElementById(
"generar"
);

const botonCopiar =
document.getElementById(
"copiar"
);

const may =
document.getElementById(
"may"
);

const min =
document.getElementById(
"min"
);

const num =
document.getElementById(
"num"
);

const sim =
document.getElementById(
"sim"
);



// MOSTRAR VALOR INICIAL

valor.textContent =
rango.value;




// CAMBIAR LONGITUD

rango.addEventListener(

"input",

function(){

valor.textContent =
rango.value;

generar();

}

);




// GENERAR CONTRASEÑA

function generar(){


let caracteres =
"";



if(
may.checked
){

caracteres +=
"ABCDEFGHIJKLMNOPQRSTUVWXYZ";

}



if(
min.checked
){

caracteres +=
"abcdefghijklmnopqrstuvwxyz";

}



if(
num.checked
){

caracteres +=
"0123456789";

}



if(
sim.checked
){

caracteres +=
"!@#$%^&*()_-+=";

}




if(
caracteres === ""
){

alert(
"Selecciona al menos una opción"
);

salida.value =
"";

return;

}




let resultado =
"";



for(

let i=0;

i<rango.value;

i++

){

resultado +=

caracteres.charAt(

Math.floor(

Math.random()

*

caracteres.length

)

);

}



salida.value =
resultado;



actualizarSeguridad();



salida.classList
.add(
"animacion"
);



setTimeout(

()=>{

salida.classList
.remove(
"animacion"
);

},

250

);


}





// SEGURIDAD VISUAL

function actualizarSeguridad(){


const barras =

document.querySelectorAll(
".barra"
);




barras.forEach(

barra=>{

barra.className =
"barra";

}

);




let puntos =
0;



if(
may.checked
) puntos++;

if(
min.checked
) puntos++;

if(
num.checked
) puntos++;

if(
sim.checked
) puntos++;




if(
rango.value >= 12
){

puntos++;

}



if(
rango.value >= 20
){

puntos++;

}




let texto =
"";

let color =
"";

let cantidad =
0;




if(
puntos <= 2
){

texto =
"BAJA";

color =
"rojo";

cantidad =
1;

}



else if(
puntos <= 4
){

texto =
"MEDIA";

color =
"amarillo";

cantidad =
2;

}



else if(
puntos <= 5
){

texto =
"ALTA";

color =
"verde";

cantidad =
3;

}



else{

texto =
"MUY ALTA";

color =
"verde";

cantidad =
4;

}




nivel.textContent =
texto;




for(

let i=0;

i<cantidad;

i++

){

barras[i]
.classList
.add(
color
);

}


}





// BOTÓN GENERAR

botonGenerar
.addEventListener(

"click",

generar

);




// COPIAR

botonCopiar
.addEventListener(

"click",

function(){

if(
salida.value === ""
){

return;

}


navigator
.clipboard
.writeText(

salida.value

);


botonCopiar.innerText =
"✓";



setTimeout(

()=>{

botonCopiar.innerText =
"📋";

},

1000

);


}

);





// CHECKBOXES

document

.querySelectorAll(
"input[type='checkbox']"
)

.forEach(

check=>{

check.addEventListener(

"change",

generar

);

}

);




// GENERAR AL INICIO

generar();