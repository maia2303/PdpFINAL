import { GestorTareas } from "../GestorTareas.js"; // instancia lista
import { mostrarDetalle } from "../Pantalla/detalleTarea.js";
import { Tarea } from "../../models/Tarea.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
    
export function menuDetalles(gestor: GestorTareas, listaActual: Tarea[]): void 
{
    //en vez de preguntar s/n pedir directamente el id y 0 para volver
    const respuesta = prompt("Desea ver el detalle de alguna tarea? (s/n): ").toLowerCase();


    if (respuesta === 's') 
    {
        const idTarea = prompt("Ingrese el número de la tarea: ");

        //buscar la tarea por id

        const tareaEncontrada = listaActual.find(t => t.id === idTarea);
        
        if (tareaEncontrada) 
        {
            mostrarDetalle(tareaEncontrada, gestor);
        }
        else 
        {
            console.log("❌ No se encontró la tarea.");
        }
    }
}



