import { menuVerTarea } from "./utils/Pantalla/menuVerTarea.js";
import { menuCrearTarea } from "./utils/Pantalla/MenuCrearTarea.js";
import { buscarTarea } from "./utils/Pantalla/menuBuscar.js";
import { menuEstadisticas } from "./utils/Pantalla/menuEstadisticas.js";
import { menuOrdenar } from "./utils/Pantalla/menuOrdenar.js";

import PromptSync from "prompt-sync";
import { Tarea } from "./models/Tarea.js";
import { GestorTareas } from "./utils/GestorTareas.js";
const prompt = PromptSync();

const gestor = new GestorTareas ();

let opcion = -1;

while(opcion != 0){ 
    console.log("[1] Crear tarea \n[2] Ver tareas \n[3] Buscar tarea \n[4] Ver Estadisticas \n[5] Ordenar tareas \n[0] Salir\n");

    opcion = Number(prompt(">> "));
    
    switch(opcion) {
        case 1:
            menuCrearTarea(gestor);
            break;
        case 2:
            menuVerTarea(gestor);
            break;
        case 3:
            buscarTarea(gestor);
            break;
            case 4:
            menuEstadisticas(gestor);
            break;
        case 5:
            menuOrdenar(gestor);
            break;
        case 0:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida, intente de nuevo.");
    }
} 
