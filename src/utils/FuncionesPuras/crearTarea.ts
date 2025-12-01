import {Tarea} from "../../models/Tarea.js";
//es llamado por la pantalla de crear tarea con los datos ingresados por el usuario
export function crearObjetoTarea(id: number, titulo: string, descripcion: string, dificultad: 1 |2 |3 , vencimiento: string, eliminada: boolean): Tarea{
    //devuelve un objeto tarea con los datos ingresados
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