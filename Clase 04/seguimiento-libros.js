// SEGUIMIENTO DE LIBROS

// Array almacenar libros leídos
let librosLeidos = [];


// Función para agregar libros
function agregarLibro(titulo) {

    librosLeidos.push(titulo);

    console.log("Libro agregado:", titulo);

}

// Función para mostrar libros
function mostrarLibrosLeidos() {

    console.log("\n===== LIBROS LEÍDOS =====");

    if (librosLeidos.length === 0) {
        console.log("No hay libros registrados.");
        return;
    }

    for (let i = 0; i < librosLeidos.length; i++) {

        console.log((i + 1) + ". " + librosLeidos[i]);

    }

}


agregarLibro("El Principito");

agregarLibro("Hábitos Atómicos");

agregarLibro("Padre Rico Padre Pobre");

agregarLibro("Cien años de soledad");

mostrarLibrosLeidos();