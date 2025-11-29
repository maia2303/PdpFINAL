import { Tarea } from "../models/Tarea";

export const elimiarTarea = ( 
    listaActual: readonly Tarea[],
    id: Number
): Tarea[] => {
    return listaActual.map(t => {
        if(t.id === id){
            return Object.freeze({
                ...t,
                eliminada: true,
                ultimaEdicion: new Date().toLocaleString()
            });
        }
        return t;
    });
};

