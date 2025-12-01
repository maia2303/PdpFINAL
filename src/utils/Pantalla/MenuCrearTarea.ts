import PromptSync from "prompt-sync";
import { GestorTareas } from "../GestorTareas.js";
import { crearObjetoTarea } from "../FuncionesPuras/crearTarea.js";
import { DIFICULTADES, Dificultad } from "../../models/Tarea.js";

const prompt = PromptSync();

export const crearTarea = (gestor: GestorTareas): void => {
    console.log("---NUEVA TAREA---");
    let titulo = "";
    while(titulo.trim() === ""){
        titulo = prompt("Título: ");
    } 
    const descripcion = prompt("Descripción: ");
    const dificInput = prompt(`Dificultad [1] Fácil | [2] Medio | [3] Difícil: `).trim();
    const dificNumero = parseInt(dificInput);
    const dificultad: Dificultad = (DIFICULTADES as readonly number[]).includes(dificNumero)? (dificNumero as Dificultad) : 1;
    
    const vencimiento = prompt("Vencimiento (DD-MM-YYYY): ");

    
    const nuevoId = gestor.getTarea().length + 1;

    const nuevaTarea = crearObjetoTarea(
        nuevoId, 
        titulo, 
        descripcion, 
        dificultad, 
        vencimiento,
        false
    );
    
    gestor.agregar(nuevaTarea);
    console.log(" Tarea creada con éxito.");
};