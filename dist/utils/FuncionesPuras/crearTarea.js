"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearObjetoTarea = crearObjetoTarea;
function crearObjetoTarea(id, titulo, descripcion, dificultad, vencimiento, eliminada) {
    return {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        dificultad: dificultad,
        estado: "pendiente",
        vencimiento: vencimiento,
        creacion: new Date().toISOString(),
        ultimaEdicion: new Date().toISOString(),
        eliminada: eliminada
    };
}
