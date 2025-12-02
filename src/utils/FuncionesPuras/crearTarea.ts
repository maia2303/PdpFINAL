import {Tarea, Estado, Dificultad} from "../../models/Tarea.js";
//es llamado por la pantalla de crear tarea con los datos ingresados por el usuario
export const crearObjetoTarea =(
    titulo: string, 
    descripcion: string, 
    estado: Estado,
    dificultad: Dificultad, 
    vencimiento: Date, 
    id: string,
    fechaActual: Date
): Tarea => {
    //devuelve un objeto tarea con los datos ingresados
    return { 
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