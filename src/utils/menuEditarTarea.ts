import promptSync from "prompt-sync";
import {GestorTareas} from "./GestorTareas.js";
import { Tarea, Estado, Dificultad, ESTADOS, DIFICULTADES } from "../models/Tarea.js";
const prompt = promptSync();

export const menuEditar = (listaActual: readonly Tarea[], id: number): Tarea[] => {
    
    const tarea = listaActual.find(t => t.id === id);

    if(!tarea) return [...listaActual]; //Si no existe la tarea a editar, se devuelve sin hacer cambios

    console.log(`Editando la tarea ${tarea.titulo} (dejar vacío para mantener la información)`);
    const nuevoTitulo = prompt("Título: ");
    const nuevaDescripcion = prompt("Descripción: ");
    const nuevoEstadoInput = prompt(`Estado (${ESTADOS.join(" | ")}): `).toLowerCase().trim();
    const nuevaDificultadInput = prompt(`Dificultad (${DIFICULTADES.join(" | ")}): `).trim(); 

    //objeto para cambios
    const cambios: any = {};  
    // evitar any, usar Partial <Tarea> o <T> que significa que el objeto va a tener algunas propiedades de Tarea pero no necesariamente todas 
    // const cambios: Partial<Tarea> = {};
    if(nuevoTitulo.trim()) cambios.titulo = nuevoTitulo;
    if(nuevaDescripcion.trim()) cambios.descripcion = nuevaDescripcion;


    if(nuevoEstadoInput){
        if((ESTADOS as readonly string[]).includes(nuevoEstadoInput)){
            cambios.estado = nuevoEstadoInput as Estado;
        } else{
                console.log("Estado inválido, se mantiene el anterior...");
        }
    }

    if(nuevaDificultadInput){
        const difNum = parseInt(nuevaDificultadInput)
        if ((DIFICULTADES as readonly number[]).includes(difNum)) {
            cambios.dificultad = difNum as Dificultad;
        } else {
            console.log("Dificultad inválida, se mantiene el anterior...");
        }
    }


    cambios.ultimaEdicion = new Date().toISOString();
    
    // agregar fecha de vencimiento para poder editar 
    return GestorTareas.editarTareaLista(listaActual, id, cambios);
};
