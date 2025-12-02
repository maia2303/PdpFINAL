import PromptSync from "prompt-sync";
import { GestorTareas } from "../GestorTareas.js";
import { Dificultad, Estado } from "../../models/Tarea.js";

const prompt = PromptSync();

export const crearTarea = (gestor: GestorTareas): void => { 
    console.log("---NUEVA TAREA---");

    let titulo = "";
    //para que no se pueda poner vacio el titulo
    while(titulo.trim() === "") titulo = prompt("Título: "); 

    const descripcion = prompt("Descripción: ");

    const dificInput = prompt(`Dificultad [1] Fácil | [2] Medio | [3] Difícil: `).trim();
    const dificNumero = parseInt(dificInput);

    const dificultad: Dificultad = [1, 2, 3].includes(dificNumero)
    ? (dificNumero as Dificultad):Dificultad.Facil;//si no es valido, por defecto fácil

    
    const vencimientoStr = prompt("Vencimiento (DD-MM-YYYY): ");
    const vencimiento = new Date(vencimientoStr); // se convierte a fecha real

    
    gestor.agregar(titulo, descripcion, Estado.pendiente, dificultad, vencimiento);
    console.log(" Tarea creada con éxito.");
};