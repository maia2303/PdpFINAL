"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuVerTarea = menuVerTarea;
const Tarea_js_1 = require("../../models/Tarea.js");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const verTareas_js_1 = require("../FuncionesPuras/verTareas.js");
const menuDetalle_js_1 = require("./menuDetalle.js");
const prompt = (0, prompt_sync_1.default)();
function menuVerTarea(gestor) {
    console.log("\n--- LISTA DE TAREAS ---");
    console.log("[1] Todas \n[2] En curso \n[3] Terminadas \n[4] Pendientes \n[5] Canceladas \n[0] Volver");
    const opcion = prompt(">> ");
    if (opcion == "0")
        return;
    const todasLasTareas = gestor.getTareas();
    //creamos un mapa de opciones para relacionar la opcion ingresada con el estado correspondiente
    const mapaOpciones = {
        "2": Tarea_js_1.Estado.enCurso,
        "3": Tarea_js_1.Estado.terminada,
        "4": Tarea_js_1.Estado.pendiente,
        "5": Tarea_js_1.Estado.cancelada
    };
    //se guarda en una variable la lista filtrada correctamente
    const ListaParaMostrar = (0, verTareas_js_1.verTareas)(mapaOpciones, opcion, todasLasTareas);
    //desp q este filtrado va a mostrar
    if (ListaParaMostrar.length === 0)
        console.log("No hay tareas en la lista");
    ListaParaMostrar.forEach(t => console.log(`📌 [${t.id}]  ${t.titulo.toUpperCase()}`));
    (0, menuDetalle_js_1.menuDetalles)(gestor, ListaParaMostrar);
}
