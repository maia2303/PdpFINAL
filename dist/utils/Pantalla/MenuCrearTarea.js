"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Tarea_js_1 = require("../../models/Tarea.js");
const prompt = (0, prompt_sync_1.default)();
const crearTarea = (gestor) => {
    console.log("---NUEVA TAREA---");
    let titulo = "";
    //para que no se pueda poner vacio el titulo
    while (titulo.trim() === "")
        titulo = prompt("Título: ");
    const descripcion = prompt("Descripción: ");
    const dificInput = prompt(`Dificultad [1] Fácil | [2] Medio | [3] Difícil: `).trim();
    const dificNumero = parseInt(dificInput);
    const dificultad = [1, 2, 3].includes(dificNumero)
        ? dificNumero : Tarea_js_1.Dificultad.Facil; //si no es valido, por defecto fácil
    const vencimientoStr = prompt("Vencimiento (DD-MM-YYYY): ");
    const vencimiento = new Date(vencimientoStr); // se convierte a fecha real
    gestor.agregar(titulo, descripcion, Tarea_js_1.Estado.pendiente, dificultad, vencimiento);
    console.log(" Tarea creada con éxito.");
};
exports.crearTarea = crearTarea;
