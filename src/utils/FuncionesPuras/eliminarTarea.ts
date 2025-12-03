import { Tarea } from "../../models/Tarea.js";

// Se crea una lista de tareas marcadas como eliminadas (Soft delete)
//Funcion pura: no muta la lista original (listaActual), solo depende de sus entradas
export const eliminarTarea = ( 
    listaActual: readonly Tarea[],
    id: number, // se corrige el tipo de id a string
    fechaEdicion: Date
): Tarea[] => {
    return listaActual.map(t => { //**PF**:usamos map para aplicar el cambio y devolver una lista nueva...
        if(t.id === id){ // **PE**:Usamos ID de tipo number para identificar la tarea a eliminar
            return Object.freeze({
                ...t, //**PF/POO**: crea nuevo objeto Tarea copiando las propiedades existentes
                eliminada: true, // se marca como eliminada (Soft delete) ...(Spread operator)
                ultimaEdicion: fechaEdicion // se actualiza la fecha de ultima edicion
            });
        }
        return t; // se devuelven las tareas sin cambios
    });
};

export const obtenerTareasActivas = ( lista: readonly Tarea[]): Tarea[] => {
    return lista.filter(t => !t.eliminada); // filtramos las tareas no eliminadas
};