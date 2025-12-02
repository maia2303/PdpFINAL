"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarDetalle = void 0;
const menuEditarTarea_1 = require("./menuEditarTarea");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const mostrarDetalle = (tarea, gestor) => {
    let enDetalle = true; //guardamos id para buscar la opcion mas fresca de la tarea
    //creamos una variable para que muestre la dificultad según lo que ponemos en consola
    const dificultadLuna = "🌕".repeat(tarea.dificultad) + "🌑".repeat(3 - tarea.dificultad);
    console.log("------------------------------");
    console.log("DETALLES DE LA TAREA");
    console.log(` 🆔  ID: ${tarea.id}`);
    console.log(` 📌  Título:        ${tarea.titulo}`);
    console.log(` 📝  Descripción:   ${tarea.descripcion}`);
    console.log(` 🔥  Dificultad:    ${dificultadLuna}`);
    console.log(` 📊  Estado:        ${tarea.estado.toUpperCase()}`);
    console.log(` 📅  Vencimiento:   ${tarea.vencimiento || "Sin información"}`);
    console.log(` 🕒  Creación:      ${tarea.creacion}`);
    console.log(` ✏️   Última Ed.:    ${tarea.ultimaEdicion}`);
    console.log("------------------------------");
    console.log("(e) Editar | (d) Eliminar | (0) Volver");
    const opcion = prompt(">> ").toLowerCase();
    if (opcion === 'e') {
        (0, menuEditarTarea_1.menuEditar)(tarea, gestor); //llamar al editor cuando se esta viendo una tarea en especifico y no antes
    }
    else if (opcion === 'd') {
        console.log("\n⚠️  ¡Atención! Estás a punto de borrar esta tarea.");
        const confirmar = prompt(`¿Seguro que desea eliminar "${tarea.titulo}"? (s/n): `);
        if (confirmar.toLowerCase() === 's') {
            const eliminado = gestor.eliminarTarea(tarea.id);
            if (eliminado) {
                console.log("\n✅ Tarea eliminada correctamente.");
                prompt("Presione Enter para volver al menú anterior...");
                enDetalle = false; // Rompemos el bucle para salir
            }
            else {
                console.log("\n❌ Error: No se pudo eliminar la tarea.");
                prompt("Presione Enter para continuar...");
            }
        }
    }
    else if (opcion === '0') {
        enDetalle = false; // Volver atrás
    }
    else {
        console.log("Opción no válida.");
        prompt("Presione Enter para intentar de nuevo...");
    }
};
exports.mostrarDetalle = mostrarDetalle;
