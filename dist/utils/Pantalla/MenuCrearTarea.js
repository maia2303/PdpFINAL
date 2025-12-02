"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const crearTarea_js_1 = require("../FuncionesPuras/crearTarea.js");
const Tarea_js_1 = require("../../models/Tarea.js");
const prompt = (0, prompt_sync_1.default)();
const crearTarea = (gestor) => {
    console.log("---NUEVA TAREA---");
    let titulo = "";
    //para que no se pueda poner vacio el titulo
    while (titulo.trim() === "") {
        titulo = prompt("Título: ");
    }
    const descripcion = prompt("Descripción: ");
    const dificInput = prompt(`Dificultad [1] Fácil | [2] Medio | [3] Difícil: `).trim();
    const dificNumero = parseInt(dificInput);
    const dificultad = Tarea_js_1.DIFICULTADES.includes(dificNumero) ? dificNumero : 1;
    const vencimiento = prompt("Vencimiento (DD-MM-YYYY): ");
    const nuevoId = gestor.getTarea().length + 1;
    const nuevaTarea = (0, crearTarea_js_1.crearObjetoTarea)(nuevoId, titulo, descripcion, dificultad, vencimiento, false);
    gestor.agregar(nuevaTarea);
    console.log(" Tarea creada con éxito.");
};
exports.crearTarea = crearTarea;
