"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuDetalles = menuDetalles;
const detalleTarea_js_1 = require("../Pantalla/detalleTarea.js");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function menuDetalles(gestor, listaActual) {
    //en vez de preguntar s/n pedir directamente el id y 0 para volver
    const respuesta = prompt("Desea ver el detalle de alguna tarea? (s/n): ").toLowerCase();
    if (respuesta === 's') {
        const idTarea = parseInt(prompt("Ingrese el número de la tarea: "));
        //buscar la tarea por id
        const tareaEncontrada = listaActual.find(t => t.id === idTarea);
        if (tareaEncontrada) {
            (0, detalleTarea_js_1.mostrarDetalle)(tareaEncontrada, gestor);
        }
        else {
            console.log("❌ No se encontró la tarea.");
        }
    }
}
