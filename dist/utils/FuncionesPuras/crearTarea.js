"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearObjetoTarea = void 0;
const Tarea_js_1 = require("../../models/Tarea.js");
//es llamado por la pantalla de crear tarea con los datos ingresados por el usuario
const crearObjetoTarea = (titulo, descripcion, estado, dificultad, vencimiento, id, fechaActual) => {
    //devuelve un objeto tarea con los datos ingresados
    return {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        estado: Tarea_js_1.Estado.pendiente,
        dificultad: dificultad,
        vencimiento: vencimiento,
        creacion: fechaActual,
        ultimaEdicion: fechaActual,
        eliminada: false
    };
};
exports.crearObjetoTarea = crearObjetoTarea;
