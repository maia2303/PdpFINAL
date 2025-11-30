import { Tarea } from "../../models/Tarea";
import { GestorTareas } from "../GestorTareas";
import { menuEditar } from "./menuEditarTarea";

export const mostrarDetalle = (t: Tarea) => {
    // guardamos la funcion en una constante
    const dificultadLuna = "🌕".repeat(t.dificultad) + "🌑".repeat(3 - t.dificultad);
    //creamos una variable para que muestre la dificultad según lo que ponemos en consola

    console.log(`
    ID: ${t.id} \n
    Título: ${t.titulo}\n
    Descripción: ${t.descripcion}\n
    Dificultad: ${dificultadLuna}\n
    Estado: ${t.estado}\n
    Vencimiento: ${t.vencimiento} | "Sin informacion"\n
    Creación: ${t.creacion}\n
    Última edición: ${t.ultimaEdicion}`);

    //llamar al editor
    //menuEditar([t]);
};