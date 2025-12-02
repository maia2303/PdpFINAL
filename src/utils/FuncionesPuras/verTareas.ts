import { Tarea, Estado } from '../../models/Tarea';
import { GestorTareas } from '../GestorTareas.js';
// Funcion pura: para ver tareas no eliminadas
import { obtenerTareasActivas } from './eliminarTarea.js';

export function verTareas(mapa: Record<string, Estado>, opcion: string, listaTareas: readonly Tarea[]): Tarea[]
{

    const estadoSeleccionado = mapa[opcion];
    
    if (opcion === "1") {
        return [...listaTareas]; //devolvemos una copia de la lista
    } else if(estadoSeleccionado)
    {
        return listaTareas.filter(t => t.estado === estadoSeleccionado);//filtra por el estado seleccionado
    }
    else 
    {
        return [];
    }
}