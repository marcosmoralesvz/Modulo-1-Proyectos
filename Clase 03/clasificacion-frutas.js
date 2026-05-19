// CLASIFICACIÓN DE FRUTAS

let frutas = [
    "manzana",
    "platano",
    "uva",
    "manzana",
    "pera",
    "platano",
    "uva",
    "manzana",
    "fresa",
    "pera",
    "mango",
    "mango"
];

//  almacenar cantidades
let conteoFrutas = {};


//FOR

for (let i = 0; i < frutas.length; i++) {

    let fruta = frutas[i];

    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }

}


console.log("===== CLASIFICACIÓN DE FRUTAS (FOR) =====");

for (let fruta in conteoFrutas) {
    console.log(fruta + ": " + conteoFrutas[fruta]);
}



// WHILE

console.log("\n===== CLASIFICACIÓN DE FRUTAS (WHILE) =====");

let contador = 0;

let conteoWhile = {};

while (contador < frutas.length) {

    let fruta = frutas[contador];

    if (conteoWhile[fruta]) {
        conteoWhile[fruta]++;
    } else {
        conteoWhile[fruta] = 1;
    }

    contador++;
}


for (let fruta in conteoWhile) {
    console.log(fruta + ": " + conteoWhile[fruta]);
}