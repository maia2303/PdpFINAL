"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuOrdenar = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const ordenarTareas_1 = require("../FuncionesPuras/ordenarTareas");
const prompt = (0, prompt_sync_1.default)();
const menuOrdenar = (gestor) => {
    console.log("\n ORDENAR TAREAS ");
    console.log("Criterios disponibles:");
    console.log(" - Titulo");
    console.log(" - Vencimiento");
    console.log(" - Creacion");
    console.log(" - dificultad");
    const criterioInput = prompt("Escribe el criterio: ").toLowerCase();
    if (["titulo", "vencimiento", "creacion", "dificultad"].includes(criterioInput)) {
        gestor.ordenar(criterioInput);
        console.log("✅ Lista ordenada con exito!");
    }
    else {
        console.log("❌ Criterio invalido, intenta nuevamente.");
    }
    const criterio = criterioInput;
    //pedir orden 
    const ordenInput = prompt("Orden (asc/desc): ").toLowerCase();
    const orden = ordenInput === "desc" ? "desc" : "asc"; // valor por defecto asc
    //obtener tareas ordenadas
    const lista = gestor.getTareas();
    if (lista.length === 0) {
        console.log("❌ No hay tareas para ordenar.");
        return;
    }
    const listaOrdenada = (0, ordenarTareas_1.ordenarTarea)(lista, criterio, orden);
    //mostar/ordenar usando el criterio y orden
    console.log(`\n📌 Tareas ordenadas por "${criterio.toUpperCase()}" (${orden.toUpperCase()})`);
    listaOrdenada.forEach((t) => {
        console.log(`- [${t.id}] ${t.titulo} | vence: ${t.vencimiento || "sin información"} | dif: ${t.dificultad}`);
    });
    console.log("\n✅ Ordenamiento completado.");
};
exports.menuOrdenar = menuOrdenar;
