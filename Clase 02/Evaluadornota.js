// EVALUADOR DE NOTAS

let nota = 75;

console.log("La nota del estudiante es:", nota);


if (nota >= 90 && nota <= 100) {
    console.log("Resultado: Aprobado - Excelente");

} else if (nota >= 75 && nota <= 89) {
    console.log("Resultado: Aprobado - Bien");

} else if (nota >= 60 && nota <= 74) {
    console.log("Resultado: Aprobado - Suficiente");

} else if (nota >= 0 && nota < 60) {
    console.log("Resultado: No aprobado");

} else {
    console.log("La nota ingresada no es válida");
}


console.log("\n===== PRUEBAS =====");

let pruebas = [45, 60, 75, 90, 100, 0];

for (let i = 0; i < pruebas.length; i++) {

    let nota = pruebas[i];

    if (nota >= 90) {
        console.log(nota + ": Excelente");

    } else if (nota >= 75) {
        console.log(nota + ": Bien");

    } else if (nota >= 60) {
        console.log(nota + ": Suficiente");

    } else {
        console.log(nota + ": No aprobado");
    }
}