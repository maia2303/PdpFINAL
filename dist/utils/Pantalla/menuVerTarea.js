"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuVerTarea = menuVerTarea;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const verTareas_js_1 = require("../verTareas.js");
const menuDetalle_js_1 = require("./menuDetalle.js");
const prompt = (0, prompt_sync_1.default)();
function menuVerTarea(gestor) {
    console.log("\n--- MOSTRAR TAREAS ---");
    console.log("[1] Todas \n[2] En curso \n[3] Terminadas \n[4] Pendientes \n[5] Canceladas \n[0] Volver");
    const opcion = prompt(">> ");
    if (opcion == "0")
        return;
    const mapaOpciones = {
        "2": "en curso",
        "3": "terminada",
        "4": "pendiente",
        "5": "cancelada"
    };
    const ListaParaMostrar = (0, verTareas_js_1.verTareas)(mapaOpciones, opcion, gestor);
    //desp q este filtrado va a mostrar
    if (ListaParaMostrar.length === 0)
        console.log("No hay tareas en la lista");
    ListaParaMostrar.forEach(t => console.log(`📌[${t.id}]  ${t.titulo}`));
    (0, menuDetalle_js_1.menuDetalles)(gestor, ListaParaMostrar);
}
/*enum EstadosEnum //enum oara los estados posibles
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
while(opcion != 0)
{
    if (opcion === 1)
    {
        const todasLasTareas = gestor.getTarea();

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
        const tareasfiltradas = gestor.getTarea().filter(t => t.estado === e);

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

    const tareaEncontrada = gestor.getTarea().find(t => t.id === idTarea);
    
    if (tareaEncontrada)
    {
        mostrarDetalle(tareaEncontrada);

        //menuEditar(listaActual, id, gestor);


    {
        console.log("❌ No se encontró la tarea.");
    }
}
}
}

//const ordenarTitulos = */ 
