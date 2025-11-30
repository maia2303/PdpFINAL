import promptSync from "prompt-sync";
import {GestorTareas} from "./GestorTareas.js";
import { Tarea, Estado, Dificultad } from "../models/Tarea.js";
const prompt = promptSync();

const menuEditar = (listaActual: readonly Tarea[], id: number): Tarea[] => {
    
    const tarea = listaActual.find(t => t.id === id);

    if(!tarea) return [...listaActual]; //Si no existe la tarea a editar, se devuelve sin hacer cambios

    console.log(`Editando la tarea ${tarea.titulo} (dejar vacío para mantener la información)`);
    const nuevoTitulo = prompt("Título: ");
    const nuevaDescripcion = prompt("Descripción: ");
    const nuevoEstadoInput = prompt("Estado [1] pendiente | [2] en curso | [3] terminada | [4] cancelada: ");
    const nuevaDificultadInput = prompt("Dificultad [1-3]: "); 

    /*let nuevoEstado: Estado | undefined;

    const estados = //ver de usar enum
    {
        "1": "pendiente",
        "2": "en curso",
        "3": "terminada",
        "4": "cancelada" 
    }*/



    //objeto para cambios
    const cambios: any = {}; /* evitar any, usar Partial <Tarea> o <T> que significa que el objeto va a tener algunas propiedades de Tarea pero no necesariamente todas */
    //const cambios: Partial<Tarea> = {};
    if(nuevoTitulo.trim()) cambios.titulo = nuevoTitulo;
    if(nuevaDescripcion.trim()) cambios.descripcion = nuevaDescripcion;


    // mapeamos la entrada del usuario a su tipo de estado correspondiente
    // us
    const estados: Record<string, Estado> = { //usamos numeros por nuestro prompt 
        "1": "pendiente",
        "2": "en curso",
        "3": "terminada",
        "4": "cancelada"
    }
    if(nuevaDificultadInput.trim())
        {
        const nuevaDificultadNum = parseInt(nuevaDificultadInput);
        if([1,2,3].includes(nuevaDificultadNum)){
            cambios.dificultad = nuevaDificultadNum as Dificultad;
        } else {
            console.log("Dificultad no válida, se mantiene la anterior.");
        }
    }
    if(nuevoEstadoInput.trim())
    {
        nuevoEstado = estados[nuevoEstadoInput as keyof typeof estados] as Estado;
        if(nuevoEstado){
            cambios.estado = nuevoEstado;
        } else {
            console.log("Estado no válido, se mantiene el anterior.");
        }
    }
    // agregar fecha de vencimiento para poder editar 
    return GestorTareas.editarTareaLista(listaActual, id, cambios);
};
