import { GestorTareas } from "../GestorTareas.js"; // instancia lista
import { mostrarDetalle } from "../Pantalla/detalleTarea.js";
import { Tarea } from "../../models/Tarea.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
    
export function menuDetalles(gestor: GestorTareas, listaActual: Tarea[]): void 
{
    console.log("¿Desea ver el detalle de alguna tarea?");
    const respuesta = Number(prompt("Ingrese el ID o 0 para volver: "));


    if (respuesta === 0) return;
    else
    {
        //buscar la tarea por id

        const tareaEncontrada = listaActual.find(t => t.id === respuesta);
        
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
