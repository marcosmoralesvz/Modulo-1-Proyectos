// OBJETO LIBRO

let libro = {

    titulo: "Hábitos Atómicos",

    autor: "James Clear",

    anio: 2018,

    estado: "disponible",



    // Propiedad opcional
    capitulos: [
        "Fundamentos",
        "Crear buenos hábitos",
        "Eliminar malos hábitos"
    ],



    //  describir libro
    describirLibro: function () {

        console.log(
            `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
        );

    },



   
    agregarCapitulo: function (capitulo) {

        this.capitulos.push(capitulo);

        console.log(`Capítulo agregado: ${capitulo}`);

    },



    
    eliminarCapitulo: function (capitulo) {

        let posicion = this.capitulos.indexOf(capitulo);

        if (posicion !== -1) {

            this.capitulos.splice(posicion, 1);

            console.log(`Capítulo eliminado: ${capitulo}`);

        } else {

            console.log("Capítulo no encontrado");

        }

    }

};


// MOSTRAR INFORMACIÓN

libro.describirLibro();


console.log("\n===== CAPÍTULOS =====");

console.log(libro.capitulos);


libro.agregarCapitulo("Mejora continua");

libro.eliminarCapitulo("Fundamentos");


console.log("\n===== CAPÍTULOS ACTUALIZADOS =====");

console.log(libro.capitulos);