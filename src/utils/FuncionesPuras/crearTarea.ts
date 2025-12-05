import {Tarea, Estado, Dificultad} from "../../models/Tarea.js";
import { v4 as uuidv4} from "uuid";

//es llamado por la pantalla de crear tarea con los datos ingresados por el usuario
export const crearObjetoTarea =(
    uuid: string,
    id: number,
    titulo: string, 
    descripcion: string, 
    estado: Estado,
    dificultad: Dificultad, 
    vencimiento: Date, 
    fechaActual: Date
): Tarea => {
    //devuelve un objeto tarea con los datos ingresados
    return { 
        uuid: uuidv4(),
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        estado: Estado.pendiente,
        dificultad: dificultad,
        vencimiento: vencimiento,
        creacion: fechaActual, 
        ultimaEdicion: fechaActual,
        eliminada: false
    };
       
}