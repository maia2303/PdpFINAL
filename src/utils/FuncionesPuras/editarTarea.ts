import { Tarea } from "../../models/Tarea";

export const editarTarea = (
    nuevaLista: readonly Tarea[], id: number, cambios: Partial<Tarea>, fechaEdicion: Date
): Tarea[] => {
    return nuevaLista.map(t => {
        if (t.id === id) {
            return {
                ...t,
                ...cambios,
                ultimaEdicion: fechaEdicion
            };
        }
        return t;
    });
};