import {GestorTareas} from "../GestorTareas.js"
import { Estado, Tarea, ESTADOS} from "../../models/Tarea.js";
import promptSync from "prompt-sync";
import fp from "lodash/fp";
import { verTareas } from "../FuncionesPuras/verTareas.js";
import { menuDetalles } from "./menuDetalle.js";

const prompt = promptSync();

export function menuVerTarea(gestor: GestorTareas):void
{
    console.log("\n--- MOSTRAR TAREAS ---");
    console.log("[1] Todas \n[2] En curso \n[3] Terminadas \n[4] Pendientes \n[5] Canceladas \n[0] Volver");

    const opcion = prompt(">> ");

    if(opcion == "0") return;
    //creamos un mapa de opciones para relacionar la opcion ingresada con el estado correspondiente
    const mapaOpciones: Record<string, Estado> =
    {
        "2": "en curso",
        "3": "terminada",
        "4": "pendiente",
        "5": "cancelada" 
    }

    //se guarda en una variable la lista filtrada
    const ListaParaMostrar = verTareas(mapaOpciones, opcion, gestor);

    //desp q este filtrado va a mostrar
    if(ListaParaMostrar.length === 0) console.log("No hay tareas en la lista");
    
    ListaParaMostrar.forEach(t=>console.log(`📌 [${t.id}]  ${t.titulo.toUpperCase()}`));

    menuDetalles(gestor, ListaParaMostrar);
}