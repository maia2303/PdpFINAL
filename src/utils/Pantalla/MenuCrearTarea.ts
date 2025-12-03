import PromptSync from "prompt-sync";
import { GestorTareas } from "../GestorTareas.js";
import { Dificultad, Estado } from "../../models/Tarea.js";

const prompt = PromptSync();

export const menuCrearTarea = (gestor: GestorTareas): void => { 
    console.log("---NUEVA TAREA---");

    let titulo = "";
    //para que no se pueda poner vacio el titulMenuc
    while(titulo.trim() === "") titulo = prompt("Título: "); 

    const descripcion = prompt("Descripción: ");

    const dificInput = prompt(`Dificultad [1] Fácil | [2] Medio | [3] Difícil: `).trim();
    const dificNumero = parseInt(dificInput);

    const dificultad: Dificultad = [1, 2, 3].includes(dificNumero)
    ? (dificNumero as Dificultad):Dificultad.Facil;//si no es valido, por defecto fácil

    
    const vencimientoStr = prompt("Vencimiento (DD-MM-YYYY): ");
    const vencimiento = new Date(vencimientoStr); // se convierte a fecha real

    const nuevoId = gestor.todasTareas().length + 1;

    gestor.agregar(nuevoId, titulo, descripcion, Estado.pendiente, dificultad, vencimiento);
    console.log(" Tarea creada con éxito.");
};