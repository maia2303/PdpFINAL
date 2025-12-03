"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearObjetoTarea = void 0;
const Tarea_js_1 = require("../../models/Tarea.js");
const uuid_1 = require("uuid");
//es llamado por la pantalla de crear tarea con los datos ingresados por el usuario
const crearObjetoTarea = (uuid, id, titulo, descripcion, estado, dificultad, vencimiento, fechaActual) => {
    //devuelve un objeto tarea con los datos ingresados
    return {
        uuid: (0, uuid_1.v4)(),
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
