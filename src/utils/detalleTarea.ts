import { Tarea } from "../models/Tarea";

export const mostrarDetalle = (t: Tarea) => {
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