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
    Vencimiento: ${tarea.vencimiento} | "Sin informacion"\n
    Creación: ${tarea.creacion}\n
    Última edición: ${tarea.ultimaEdicion}`);
    console.log("------------------------------");
    console.log("(e) Editar o (0) Volver");
    const opcion = prompt(">> ");
    if (opcion === 'e') {
        (0, menuEditarTarea_1.menuEditar)(tarea, gestor); //llamar al editor cuando se esta viendo una tarea en especifico y no antes
    }
    else {
        return;
    }
};
exports.mostrarDetalle = mostrarDetalle;
