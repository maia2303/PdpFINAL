"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarTarea = void 0;
const editarTarea = (nuevaLista, id, cambios, fechaEdicion) => {
    return nuevaLista.map(t => {
        if (t.id === id) {
            return Object.assign(Object.assign(Object.assign({}, t), cambios), { ultimaEdicion: fechaEdicion });
        }
        return t;
    });
};
exports.editarTarea = editarTarea;
