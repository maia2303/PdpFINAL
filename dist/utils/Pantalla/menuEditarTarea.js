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
    const fechaActualStr = new Date(tarea.vencimiento).toLocaleDateString;
    const nuevoVencimientoinput = prompt(`Vencimiento (${tarea.vencimiento || "Sin información"}): `);
    let nuevoVencimiento = tarea.vencimiento instanceof Date ? tarea.vencimiento : new Date(tarea.vencimiento);
    //se valida estado solo si el usuario escribe algo
    let nuevoEstado = tarea.estado;
    const nuevoEstadoInput = prompt(`Estado (${tarea.estado}) [E]n curso | [T]erminada | [P]endiente | [C]ancelada: `).toUpperCase();
    switch (nuevoEstadoInput) {
        case 'P':
            nuevoEstado = Tarea_js_1.Estado.pendiente;
            break;
        case 'E':
            nuevoEstado = Tarea_js_1.Estado.enCurso;
            break;
        case 'T':
            nuevoEstado = Tarea_js_1.Estado.terminada;
            break;
        case 'C':
            nuevoEstado = Tarea_js_1.Estado.cancelada;
            break;
        default:
            console.log("⚠️ Opción no válida. Se mantendrá el estado original.");
    }
    let nuevaDificultad = tarea.dificultad;
    //Se valida la dificultad solo si el usuario escribe algo
    const mapDificultad = { 1: "Fácil", 2: "Medio", 3: "Difícil" };
    const dificultadEdit = mapDificultad[tarea.dificultad] || tarea.dificultad;
    const nuevaDificultadInput = prompt(`Dificultad (${dificultadEdit}) [1] Fácil | [2] Medio | [3] Difícil: `);
    const confirmar = prompt("\n¿Guardar cambios? (s/n) ");
    if (confirmar === 's') {
        const cambios = {
            titulo: nuevoTitulo,
            descripcion: nuevaDescripcion,
            vencimiento: nuevoVencimiento,
            estado: nuevoEstado,
            dificultad: nuevaDificultad
        };
        gestor.editar(tarea.id, cambios);
        console.log("✅ Tarea actualizada con éxito...");
    }
    else {
        console.log("❌ Edición cancelada...");
    }
}
;
