//eliminarTarea.ts
import { Tarea } from "../models/Tarea";
// Se crea una lista de tareas marcadas como eliminadas (Soft delete)
//Funcion pura: no muta la lista original (listaActual), solo depende de sus entradas
export const elimiarTarea = ( 
    listaActual: readonly Tarea[],
    id: Number
): Tarea[] => {
    return listaActual.map(t => { //usamos map para aplicar el cambio y devolver una lista nueva...
        if(t.id === id){ // Usamos ID de tipo number para identificar la tarea a eliminar
            return Object.freeze({
                ...t,
                eliminada: true, // se marca como eliminada
                ultimaEdicion: new Date().toLocaleString() // se actualiza la fecha de ultima edicion
            });
        }
        return t; // se devuelven las tareas sin cambios
    });
};

export const obtenerTareasActivas = ( lista: readonly Tarea[]): Tarea[] => {
    return lista.filter(t => !t.eliminada); // filtramos las tareas no eliminadas
};
