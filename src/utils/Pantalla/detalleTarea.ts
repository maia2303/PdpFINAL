import { Tarea } from "../../models/Tarea";
import { GestorTareas } from "../GestorTareas";
import { menuEditar } from "./menuEditarTarea";
import { eliminarTarea } from "../FuncionesPuras/eliminarTarea";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

export const mostrarDetalle = (tarea: Tarea, gestor: GestorTareas): void => {
    let enDetalle = true; //guardamos id para buscar la opcion mas fresca de la tarea

    const idTarea = tarea.id; // guardamos la funcion en una constante
    
//bucle si entras a editar y terminas, vuelves a ver el detalle con los datos nuevos en lugar de que el programa te saque al menú principal.
    while (enDetalle){
        console.clear(); //limpiamaos la consola cada vez que entramos al detalle
        //busca la tarea mas actualizada en el gestor, si editaste la tarea, 'tareaInicial' tiene los datos viejos (stale data).
        const tareaActual = gestor.getTarea().find(t => t.id === idTarea);

        // Si la tarea ya no existe, salimos.
        if (!tareaActual) {
            console.log("\n⚠️  La tarea ya no se encuentra disponible.");
            prompt("Presione Enter para volver...");
            enDetalle = false;
            break;
        }

    }
    //creamos una variable para que muestre la dificultad según lo que ponemos en consola
    const dificultadLuna = "🌕".repeat(tarea.dificultad) + "🌑".repeat(3 - tarea.dificultad);

    console.log("------------------------------");
    console.log("DETALLES DE LA TAREA");
    console.log(` 🆔  ID: ${tarea.id}`);
    console.log(` 📌  Título:        ${tarea.titulo}`);
    console.log(` 📝  Descripción:   ${tarea.descripcion}`);
    console.log(` 🔥  Dificultad:    ${dificultadLuna} (${tarea.dificultad})`);
    console.log(` 📊  Estado:        ${tarea.estado.toUpperCase()}`);
    console.log(` 📅  Vencimiento:   ${tarea.vencimiento || "Sin información"}`);
    console.log(` 🕒  Creación:      ${tarea.creacion}`);
    console.log(` ✏️   Última Ed.:    ${tarea.ultimaEdicion}`);
    console.log("------------------------------");
    console.log("(e) Editar | (d) Eliminar | (0) Volver");

    const opcion = prompt(">> ").toLowerCase();

    if(opcion === 'e') {
        menuEditar(tarea, gestor); //llamar al editor cuando se esta viendo una tarea en especifico y no antes

     } else if (opcion === 'd') {
        console.log("\n⚠️  ¡Atención! Estás a punto de borrar esta tarea.");
        const confirmar = prompt(`¿Seguro que desea eliminar "${tarea.titulo}"? (s/n): `);

    if (confirmar.toLowerCase() === 's') {
        const eliminado = gestor.eliminarTarea(tarea.id);

        if (eliminado) {
                    console.log("\n✅ Tarea eliminada correctamente.");
                    prompt("Presione Enter para volver al menú anterior...");
                    enDetalle = false; // Rompemos el bucle para salir
                } else {
                    console.log("\n❌ Error: No se pudo eliminar la tarea.");
                    prompt("Presione Enter para continuar...");
                }
            }

        } else if (opcion === '0') {
            enDetalle = false; // Volver atrás

        } else {
            console.log("Opción no válida.");
            prompt("Presione Enter para intentar de nuevo...");
        }
    }
