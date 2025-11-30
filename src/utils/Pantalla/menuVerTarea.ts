import {GestorTareas} from "../GestorTareas.js"
import { Estado, Tarea, ESTADOS} from "../../models/Tarea.js";
import promptSync from "prompt-sync";
import { menuEditar } from "./menuEditarTarea.js";
import { mostrarDetalle } from "./detalleTarea.js";

const prompt = promptSync();
//EDITAR! SEPARAR LA PANTALLA CON LAS FUNCIONES
export function menuVerTarea(gestor: GestorTareas):void
{
    console.log("\n--- MOSTRAR TAREAS ---");
    console.log("[1] Todas las tareas \n[2] Tareas en curso \n[3] Tareas terminadas \n[4] Tareas pendientes \n[5] Tareas canceladas");

    const opcion = prompt("Elija una opción para mostrar: ");

    enum EstadosEnum //enum oara los estados posibles
    {
        EnProceso = "en curso",
        Terminada = "terminada",
        Pendiente = "pendiente",
        Cancelada = "cancelada" 
    }
    //obejto para mapear las opciones
    const estados: {[key: string]: Estado} =
    {
        "2": EstadosEnum.EnProceso,
        "3": EstadosEnum.Terminada,
        "4": EstadosEnum.Pendiente,
        "5": EstadosEnum.Cancelada
    }
    while(opcion < "1" || opcion > "5")
    {   
        if (opcion === "1")
        {
            const todasLasTareas = gestor.mostrarTarea();

            if(todasLasTareas.length === 0)
            {
                console.log("No hay tareas para mostrar.");
            }
            else
            {
                console.log("---LISTA DE TAREAS---");
                todasLasTareas.forEach(t => console.log(`[${t.id}] 📌 ${t.titulo}`))//indice NO es el id
            };
        }
        else if (estados[opcion])
        {
            const e = estados[opcion];

            //filtrar las tareas
            const tareasfiltradas = gestor.mostrarTarea().filter(t => t.estado === e);

            //verificar si se encontro algo
            if(tareasfiltradas.length === 0)
            {
                console.log(`No hay tareas para mostrar con el estado: "${e}"`);
            }
            else
            {
                console.log("---LISTA DE TAREAS---");
                
                tareasfiltradas.forEach(t => console.log(`[${t.id}] 📌 ${t.titulo}`));
            }
        }
        else 
        {
            console.log("Opcion no valida.");
        }
    }

    //---DETALLE--

    const respuesta = prompt("Desea ver el detalle de alguna tarea? (s/n): ").toLowerCase();

    if (respuesta === 's') 
    {
        const idTarea = parseInt(prompt("Ingrese el número de la tarea: "));

        //buscar la tarea por id

        const tareaEncontrada = gestor.mostrarTarea().find(t => t.id === idTarea);
        
        if (tareaEncontrada) 
        {
            mostrarDetalle(tareaEncontrada);

            menuEditar(listaActual, idTarea, gestor)


        {
            console.log("❌ No se encontró la tarea.");
        }
    }
}
}