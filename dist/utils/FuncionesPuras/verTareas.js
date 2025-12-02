"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verTareas = verTareas;
function verTareas(mapa, opcion, listaTareas) {
    const estadoSeleccionado = mapa[opcion];
    if (opcion === "1") {
        return [...listaTareas]; //devolvemos una copia de la lista
    }
    else if (estadoSeleccionado) {
        return listaTareas.filter(t => t.estado === estadoSeleccionado); //filtra por el estado seleccionado
    }
    else {
        return [];
    }
}
