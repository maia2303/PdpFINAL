import { Tarea } from "../../models/Tarea";
import { GestorTareas } from "../GestorTareas";
import { menuEditar } from "./menuEditarTarea";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

export const mostrarDetalle = (tarea: Tarea, gestor: GestorTareas): void => {
    // guardamos la funcion en una constante
    const dificultadLuna = "🌕".repeat(tarea.dificultad) + "🌑".repeat(3 - tarea.dificultad);
    //creamos una variable para que muestre la dificultad según lo que ponemos en consola

    console.log("------------------------------");
    console.log("DETALLES DE LA TAREA");
    console.log(`
    ID: ${tarea.id} \n
    Título: ${tarea.titulo}\n
    Descripción: ${tarea.descripcion}\n
    Dificultad: ${dificultadLuna}\n
    Estado: ${tarea.estado}\n
    Vencimiento: ${tarea.vencimiento || "Sin información"}\n
    Creación: ${tarea.creacion}\n
    Última edición: ${tarea.ultimaEdicion}`);
    console.log("------------------------------");
    console.log("(e) Editar o (0) Volver");

    const opcion = prompt(">> ");

    if(opcion === 'e') {
        menuEditar(tarea, gestor); //llamar al editor cuando se esta viendo una tarea en especifico y no antes

    } else {
        return;
    }

    
};