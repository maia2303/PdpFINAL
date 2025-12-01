import { Tarea } from '../models/Tarea';
import { GestorTareas } from './GestorTareas.js';
import { Estado } from '../models/Tarea.js';
// Funcion pura: para ver tareas no eliminadas
import { obtenerTareasActivas } from './FuncionesPuras/eliminarTarea.js';

export function verTareas1(listaCompleta: readonly Tarea[]): void{
    // paradigma funcional logica pura: obtenemos las tareas activas (no eliminadas)
    const tareasActivas = obtenerTareasActivas(listaCompleta);
    // Paradigma funcional: no mutamos la lista original, solo dependemos de sus entradas
    if(tareasActivas.length === 0){
        console.log("No hay tareas activas para mostrar.");
        return;
    }
    console.log("Tareas activas: ");

    //creamos un array simplificando para mostrar solo lo necesario
    const tareasparaMostrar = tareasActivas.map(t => ({
        ID: t.id,
        Titulo: t.titulo,
        Dificultad: t.dificultad,
        Vencimiento: t.vencimiento || 'n/a'
    }));
    console.table(tareasparaMostrar);
}

//ver de fusionarlos

export function verTareas(mapa: Record<string, Estado>, opcion: string, gestor: GestorTareas): Tarea[]
{
    const estadoSeleccionado = mapa[opcion];
    //la que filtra y devuelve las cosas q hay que mostar
    if(opcion == "1")
    {
        const todas= gestor.getTarea();//como no hay filtro, devuelve todas
        return todas;
    }
    else if(estadoSeleccionado)
    {
        const tareasfiltradas = gestor.getTarea().filter(t => t.estado === estadoSeleccionado);//filtra por el estado seleccionado
        return tareasfiltradas;
    }
    else 
    {
        return [];
    }
}