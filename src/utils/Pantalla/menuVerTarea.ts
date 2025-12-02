import {GestorTareas} from "../GestorTareas.js"
import { Estado, Tarea, } from "../../models/Tarea.js";
import promptSync from "prompt-sync";
import fp from "lodash/fp";
import { verTareas } from "../FuncionesPuras/verTareas.js";
import { menuDetalles } from "./menuDetalle.js";

const prompt = promptSync();

export function menuVerTarea(gestor: GestorTareas):void
{
    console.log("\n--- LISTA DE TAREAS ---");
    console.log("[1] Todas \n[2] En curso \n[3] Terminadas \n[4] Pendientes \n[5] Canceladas \n[0] Volver");

    const opcion = prompt(">> ");

    if(opcion == "0") return;

    const todasLasTareas: Tarea[] = gestor.getTareas();
    
    //creamos un mapa de opciones para relacionar la opcion ingresada con el estado correspondiente
    const mapaOpciones: Record<string, Estado> =
    {
        "2": Estado.enCurso,
        "3": Estado.terminada,
        "4": Estado.pendiente,
        "5": Estado.cancelada 
    }

    //se guarda en una variable la lista filtrada correctamente
    const ListaParaMostrar: Tarea[] = verTareas(mapaOpciones, opcion, todasLasTareas);

    //desp q este filtrado va a mostrar
    if(ListaParaMostrar.length === 0) console.log("No hay tareas en la lista");
    
    ListaParaMostrar.forEach((t, index )=>console.log(`📌 [${index}]  ${t.titulo.toUpperCase()}`));

    menuDetalles(gestor, ListaParaMostrar);
}