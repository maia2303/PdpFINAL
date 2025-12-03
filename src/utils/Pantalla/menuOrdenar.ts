import PromptSync from "prompt-sync";
import { GestorTareas } from "../GestorTareas";
import { ordenCriterio } from "../FuncionesPuras/ordenarTareas";
import { menuVerTarea } from "./menuVerTarea";

const prompt = PromptSync();


export const menuOrdenar = (gestor: GestorTareas) => {
            console.log("\n ORDENAR TAREAS ");
            console.log("Criterios disponibles:");
            console.log(" - Titulo");
            console.log(" - Vencimiento");
            console.log(" - Creacion");
            console.log(" - dificultad");

        const criterioInput = prompt("Escribe el criterio: ").toLowerCase();
            if(["titulo", "vencimiento", "creacion", "prioridad"].includes(criterioInput)){
                gestor.ordenar(criterioInput as ordenCriterio);
                        console.log("Lista ordenada con exito!");
            } else {
                    console.log("Criterio invalido, intenta nuevamente.");
            }
}