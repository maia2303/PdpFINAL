import PromptSync from "prompt-sync";
import { GestorTareas } from "../GestorTareas.js";
import { crearObjetoTarea } from "../crearTarea.js";
import { Tarea, DIFICULTADES, Dificultad } from "../../models/Tarea.js";
import { identity } from "lodash";

const prompt = PromptSync();

export const crearTarea = (gestor: GestorTareas): void => {
    console.log("---NUEVA TAREA---");
    let titulo = "";
    while(titulo.trim() === ""){
        titulo = prompt("Título: ");
    } 
    const descripcion = prompt("Descripción: ");
    const dificInput = prompt(`Dificultad (${DIFICULTADES.join(" | ")}): `).trim();
    const dificNumero = parseInt(dificInput);
    const dificultad: Dificultad = (dificNumero === 1 || dificNumero === 2 || dificNumero === 3)  ? dificNumero : 1;
    
    const vencimiento = prompt("Vencimiento (YYYY-MM-DD): ");

    
    const nuevoId = gestor.mostrarTarea().length + 1;

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