"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuEditar = menuEditar;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Tarea_js_1 = require("../../models/Tarea.js");
const prompt = (0, prompt_sync_1.default)();
//va a devolver solo una tarea no toda la lista
function menuEditar(tarea, gestor) {
    //Si no existe la tarea a editar, se devuelve sin hacer cambios
    console.log(`Editando la tarea "${tarea.titulo.toUpperCase()}" \n (dejar vacío para mantener la información)`);
    //si el usuario solo aprieta enter deja la información que ya estaba
    const nuevoTitulo = prompt(`Título (${tarea.titulo}): `) || tarea.titulo;
    const nuevaDescripcion = prompt(`Descripción (${tarea.descripcion}): `) || tarea.descripcion;
    const nuevoVencimientoinput = prompt(`Vencimiento (${tarea.vencimiento}): `) || "Sin información";
    const nuevoVencimiento = nuevoVencimientoinput !== "" ? nuevoVencimientoinput : tarea.vencimiento;
    //se valida estado solo si el usuario escribe algo
    let nuevoEstado = tarea.estado;
    const nuevoEstadoInput = prompt(`Estado (${tarea.estado}) [E]n curso | [T]erminada | [P]endiente | [C]ancelada: `).toUpperCase();
    switch (nuevoEstadoInput) {
        case 'P':
        case "PENDIENTE":
            nuevoEstado = "pendiente";
            break;
        case 'E':
        case 'EN CURSO':
            nuevoEstado = "en curso";
            break;
        case 'T':
        case 'TERMINADA':
            nuevoEstado = "terminada";
            break;
        case 'C':
        case 'CANCELADA':
            nuevoEstado = "cancelada";
            break;
        default:
            console.log("⚠️ Opción no válida. Se mantendrá el estado original.");
    }
    //Se valida la dificultad solo si el usuario escribe algo
    let nuevaDificultad = tarea.dificultad;
    const nuevaDificultadInput = prompt(`Dificultad (${tarea.dificultad}) [1] Fácil [2] Medio [3] Difícil:  `);
    if (nuevaDificultadInput !== "") {
        const dificultadN = parseInt(nuevaDificultadInput); // pasar a numero 
        if (Tarea_js_1.DIFICULTADES.includes(dificultadN)) { //verifica que el numero este en el array de dificultades
            nuevaDificultad = dificultadN;
        }
        else {
            console.log("Valor inválido, se mantiene la dificultad original");
        }
    }
    const confirmar = prompt("\n¿Guardar cambios? (s/n) ");
    if (confirmar === 's') {
        const cambios = {
            titulo: nuevoTitulo,
            descripcion: nuevaDescripcion,
            vencimiento: nuevoVencimiento,
            estado: nuevoEstado,
            dificultad: nuevaDificultad
        };
        const listaActualizada = gestor.editar(tarea.id, cambios);
        console.log("Tarea actualizada con éxito...");
    }
    else {
        console.log("Edición cancelada...");
    }
}
;
