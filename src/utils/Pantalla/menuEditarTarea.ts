import promptSync from "prompt-sync";
import {GestorTareas} from "../GestorTareas.js";
import { Tarea, Estado, Dificultad, ESTADOS, DIFICULTADES } from "../../models/Tarea.js";
const prompt = promptSync();
                                     //recibe el gestor principal y la lista actual
export function menuEditar(gestor: GestorTareas, listaActual: readonly Tarea[], id: number): Tarea[] //es un void?
{

    const idInput = prompt("Ingrese el ID de la tarea a editar: ");// que tarea vamos a editar 
    const tarea = listaActual.find(t => t.id === id);//busca la tarea editar id 

    if(!tarea) { 
        console.log("tarea no encontrada.");
     return [...listaActual]; //Si no existe la tarea a editar, se devuelve sin hacer cambios

}


    console.log(`\nEditando la tarea: "${tarea.titulo}"`);
    console.log("Dejar vacío para no modificar el dato");
    const nuevoTitulo = prompt("Título: ");
    const nuevaDescripcion = prompt("Descripción: ");
    const nuevoEstadoInput = prompt(`Estado (${ESTADOS.join(" | ")}): `).toLowerCase().trim();
    const nuevaDificultadInput = prompt(`Dificultad (${DIFICULTADES.join(" | ")}): `).trim(); 

    // MEJORAR!!!! veamos si podemos los ifs q son muchos
    /*completar(id: number) {
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
};
