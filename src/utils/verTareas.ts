//verTareas.ts
import { Tarea } from '../models/Tarea';
// Funcion pura: para ver tareas no eliminadas
import { obtenerTareasActivas } from './eliminarTarea';

export function verTareas(listaCompleta: readonly Tarea[]): void{
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

