import { menuVerTarea } from "./utils/Pantalla/menuVerTarea.js";
import { crearTarea } from "./utils/Pantalla/menuCrear.js";
import { buscarTarea } from "./utils/Pantalla/menuBuscar.js";

import PromptSync from "prompt-sync";
import { Tarea } from "./models/Tarea.js";
import { GestorTareas } from "./utils/GestorTareas.js";
const prompt = PromptSync();

const gestor = new GestorTareas ();
let cantidadTareas: number = 0;
let opcion: number;

function main():void
{
    let mal:boolean = false;

        console.log("[1] Crear tarea \n[2] Ver tareas \n[3] Buscar tarea \n[4] Salir\n");
        opcion = parseInt(prompt("Seleccione una opción: "));

          switch(opcion)
        {
        case 1:
            crear(gestor);
            break;
        case 2:
            menuVerTarea(gestor);
            break;
        case 3:
            buscarTarea();
            break;
        case 4:
            console.log("---Saliendo---");
            break;
        default:
            console.log("Opción no válida, intente de nuevo.");
            main();
        }
}
main();