import {Tarea} from "../../models/Tarea.js";

export function crearObjetoTarea(id: number, titulo: string, descripcion: string, dificultad: 1 |2 |3 , vencimiento: string, eliminada: boolean): Tarea{
    return { 
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        dificultad: dificultad,
        estado: "pendiente",
        vencimiento: vencimiento,
        creacion: new Date().toLocaleDateString(), 
        ultimaEdicion: new Date().toLocaleDateString(),
        eliminada: eliminada
    };
       
}