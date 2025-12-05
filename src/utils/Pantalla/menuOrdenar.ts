import PromptSync from "prompt-sync";
import { GestorTareas } from "../GestorTareas";
import { ordenarTarea, ordenCriterio, Orden } from "../FuncionesPuras/ordenarTareas";
import { menuVerTarea } from "./menuVerTarea";
import { Tarea } from "../../models/Tarea";

const prompt = PromptSync();

export const menuOrdenar = (gestor: GestorTareas) => {
            console.log("\n ORDENAR TAREAS ");
            console.log("Criterios disponibles:");
            console.log(" - Titulo");
            console.log(" - Vencimiento");
            console.log(" - Creacion");
            console.log(" - dificultad");

        const criterioInput = prompt("Escribe el criterio: ").toLowerCase();
            if(["titulo", "vencimiento", "creacion", "dificultad"].includes(criterioInput)){
                gestor.ordenar(criterioInput as ordenCriterio);
                        console.log("✅ Lista ordenada con exito!");
            } else {
                    console.log("❌ Criterio invalido, intenta nuevamente.");
            }

            const criterio = criterioInput as ordenCriterio;

            //pedir orden 
            const ordenInput = prompt("Orden (asc/desc): ").toLowerCase();
    const orden: Orden = ordenInput === "desc" ? "desc" : "asc"; // valor por defecto asc

            //obtener tareas ordenadas
            const lista = gestor.getTareas();

            if (lista.length === 0) {
                console.log("❌ No hay tareas para ordenar."); 
                return;
            }

            const listaOrdenada = ordenarTarea(lista, criterio, orden);

            //mostar/ordenar usando el criterio y orden
    console.log(`\n📌 Tareas ordenadas por "${criterio.toUpperCase()}" (${orden.toUpperCase()})`);
    listaOrdenada.forEach((t: Tarea) => {
        console.log(`- [${t.id}] ${t.titulo} | vence: ${t.vencimiento || "sin información" } | dif: ${t.dificultad}`);
    });
        console.log("\n✅ Ordenamiento completado.");

}