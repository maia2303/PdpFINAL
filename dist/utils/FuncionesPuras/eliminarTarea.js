"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTareasActivas = exports.eliminarTarea = void 0;
// Se crea una lista de tareas marcadas como eliminadas (Soft delete)
//Funcion pura: no muta la lista original (listaActual), solo depende de sus entradas
const eliminarTarea = (listaActual, id, // se corrige el tipo de id a string
fechaEdicion) => {
    return listaActual.map(t => {
        if (t.id === id) { // **PE**:Usamos ID de tipo number para identificar la tarea a eliminar
            return Object.freeze(Object.assign(Object.assign({}, t), { eliminada: true, ultimaEdicion: fechaEdicion // se actualiza la fecha de ultima edicion
             }));
        }
        return t; // se devuelven las tareas sin cambios
    });
};
exports.eliminarTarea = eliminarTarea;
const obtenerTareasActivas = (lista) => {
    return lista.filter(t => !t.eliminada); // filtramos las tareas no eliminadas
};
exports.obtenerTareasActivas = obtenerTareasActivas;
