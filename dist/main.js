"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menuVerTarea_js_1 = require("./utils/Pantalla/menuVerTarea.js");
const MenuCrearTarea_js_1 = require("./utils/Pantalla/MenuCrearTarea.js");
const menuBuscar_js_1 = require("./utils/Pantalla/menuBuscar.js");
const menuEstadisticas_js_1 = require("./utils/Pantalla/menuEstadisticas.js");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const GestorTareas_js_1 = require("./utils/GestorTareas.js");
const prompt = (0, prompt_sync_1.default)();
const gestor = new GestorTareas_js_1.GestorTareas();
let opcion = -1;
while (opcion != 0) {
    console.log("[1] Crear tarea \n[2] Ver tareas \n[3] Buscar tarea \n[4] Ver Estadisticas \n[0] Salir\n");
    opcion = Number(prompt(">> "));
    switch (opcion) {
        case 1:
            (0, MenuCrearTarea_js_1.crearTarea)(gestor);
            break;
        case 2:
            (0, menuVerTarea_js_1.menuVerTarea)(gestor);
            break;
        case 3:
            (0, menuBuscar_js_1.buscarTarea)(gestor);
            break;
        case 4:
            (0, menuEstadisticas_js_1.menuEstadisticas)(gestor);
            break;
        case 0:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida, intente de nuevo.");
    }
}
