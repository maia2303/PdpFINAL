"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verTareas = verTareas;
// Funcion pura: para ver tareas no eliminadas
const eliminarTarea_1 = require("./eliminarTarea");
function verTareas(listaCompleta) {
    // paradigma funcional logica pura: obtenemos las tareas activas (no eliminadas)
    const tareasActivas = (0, eliminarTarea_1.obtenerTareasActivas)(listaCompleta);
    // Paradigma funcional: no mutamos la lista original, solo dependemos de sus entradas
    if (tareasActivas.length === 0) {
        console.log("No hay tareas activas para mostrar.");
        return;
    }
    console.log("Tareas activas: ");
    //creamos un array simplificando para mostrar solo lo necesario
    const tareasparaMostrar = tareasActivas.map(t => ({
        ID: t.id,
        Titulo: t.titulo,
        Dificultad: t.dificultad,
        Vencimiento: t.vencimiento || 'n/a'
    }));
    console.table(tareasparaMostrar);
}
