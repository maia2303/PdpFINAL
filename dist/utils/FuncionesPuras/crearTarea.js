"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearObjetoTarea = crearObjetoTarea;
//es llamado por la pantalla de crear tarea con los datos ingresados por el usuario
function crearObjetoTarea(id, titulo, descripcion, dificultad, vencimiento, eliminada, fechaActual) {
    //devuelve un objeto tarea con los datos ingresados
    return {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        dificultad: dificultad,
        estado: "pendiente",
        vencimiento: vencimiento,
        creacion: fechaActual,
        ultimaEdicion: fechaActual,
        eliminada: eliminada
    };
}
