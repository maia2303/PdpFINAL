import promptSync from "prompt-sync";
import {GestorTareas} from "../GestorTareas.js";
import { Tarea, Estado, Dificultad, ESTADOS, DIFICULTADES } from "../../models/Tarea.js";
import { parse } from "path";
import { time } from "console";
import { TIMEOUT } from "dns";
const prompt = promptSync();
                                     //Es una lista actual? si solo traigo una tarea
export function menuEditar(gestor: GestorTareas, listaActual: readonly Tarea[]): Tarea[] //es un void?
{

    if(!tarea) return [...listaActual]; //Si no existe la tarea a editar, se devuelve sin hacer cambios

    console.log(`Editando la tarea ${tarea.titulo} (dejar vacío para mantener la información)`);
    const nuevoTitulo = prompt("Título: ");
    const nuevaDescripcion = prompt("Descripción: ");
    const nuevoEstadoInput = prompt(`Estado (${ESTADOS.join(" | ")}): `).toLowerCase().trim();
    const nuevaDificultadInput = prompt(`Dificultad (${DIFICULTADES.join(" | ")}): `).trim(); 

    // MEJORAR!!!! veamos si podemos los ifs q son muchos
    completar(id: number) {
      return new TareasLista(this.datos.map((i) =>
        i.id == id ? { ...i, estado: "completado" } : i
      ));
    }*/
    //objeto para cambios
    const cambios: Partial<Tarea> = {};
    if (nuevoTitulo.trim()) cambios.titulo = nuevoTitulo;
    if (nuevaDescripcion.trim()) cambios.descripcion = nuevaDescripcion;

    if (nuevoEstadoInput) {
        if (ESTADOS.includes(nuevoEstadoInput as Estado)) {
            cambios.estado = nuevoEstadoInput as Estado;
        } else {
            console.log("Estado inválido → se mantiene el anterior.");
        }
    }

    if(nuevaDificultadInput){
        const difNum = parseInt(nuevaDificultadInput)
        if ((DIFICULTADES as readonly number[]).includes(difNum)) {
            cambios.dificultad = difNum as Dificultad;
        } else {
            console.log("Dificultad inválida → se mantiene el anterior...");
        }
    }


    cambios.ultimaEdicion = new Date().toISOString();
    
    return gestor.editar(listaActual, id, cambios);
*/
};
