"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarDetalle = void 0;
const mostrarDetalle = (t) => {
    // guardamos la funcion en una constante
    const dificultadLuna = "🌕".repeat(t.dificultad) + "🌑".repeat(3 - t.dificultad);
    //creamos una variable para que muestre la dificultad según lo que ponemos en consola
    console.log(`
    ID: ${t.id} \n
    Título: ${t.titulo}\n
    Descripción: ${t.descripcion}\n
    Dificultad: ${t.dificultad} - ${dificultadLuna}\n
    Estado: ${t.estado}\n
    Vencimiento: ${t.vencimiento}\n
    Creación: ${t.creacion}\n
    Última edición: ${t.ultimaEdicion}`);
};
exports.mostrarDetalle = mostrarDetalle;
