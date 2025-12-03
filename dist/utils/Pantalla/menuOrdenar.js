"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuOrdenar = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const menuOrdenar = (gestor) => {
    console.log("\n ORDENAR TAREAS ");
    console.log("Criterios disponibles:");
    console.log(" - Titulo");
    console.log(" - Vencimiento");
    console.log(" - Creacion");
    console.log(" - dificultad");
    const criterioInput = prompt("Escribe el criterio: ").toLowerCase();
    if (["titulo", "vencimiento", "creacion", "prioridad"].includes(criterioInput)) {
        gestor.ordenar(criterioInput);
        console.log("Lista ordenada con exito!");
    }
    else {
        console.log("Criterio invalido, intenta nuevamente.");
    }
};
exports.menuOrdenar = menuOrdenar;
