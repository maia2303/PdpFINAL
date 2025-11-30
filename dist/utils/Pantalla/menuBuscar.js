"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarTarea = buscarTarea;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)(); //
//Función: buscarTarea
// Solicita al usuario un título y busca todas las tareas que coincidan y mostrar todos los resultados en la consola
// Muestra en consola los resultados encontrados.
function buscarTarea(gestor) {
    //  Solicitar al usuario el título 
    const buscador = prompt("Ingrese el título de la tarea a buscar: ").trim(); // trim quita espacios al inicio y al final de un String
    //  Llamar al método 'buscar' de la lista
    const resultados = gestor.buscar(buscador);
    //  Mostrar los resultados
    if (resultados.length === 0) {
        console.log(" No se encontraron tareas con ese título.");
    }
    else {
        console.log(` Se encontraron ${resultados.length} tarea(s):`);
        resultados.forEach((tarea, index) => {
            console.log(`${index + 1}. Título: ${tarea.titulo}`);
            console.log(`   Descripción: ${tarea.descripcion}`);
            console.log(`   Dificultad: ${tarea.dificultad}`);
            console.log(`   Estado: ${tarea.estado}`);
            console.log(`Creacion: ${tarea.creacion}`);
            console.log(`   Vencimiento: ${tarea.vencimiento || "Sin fecha"}\n`);
            console.log((`   ultimaEdicion: ${tarea.ultimaEdicion}`));
        });
    }
}
