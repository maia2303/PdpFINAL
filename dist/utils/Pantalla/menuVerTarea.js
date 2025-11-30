"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuVerTarea = menuVerTarea;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const detalleTarea_js_1 = require("./detalleTarea.js");
const prompt = (0, prompt_sync_1.default)();
//EDITAR! SEPARAR LA PANTALLA CON LAS FUNCIONES
function menuVerTarea(gestor) {
    console.log("\n--- MOSTRAR TAREAS ---");
    console.log("[1] Todas \n[2] En curso \n[3] Terminadas \n[4] Pendientes \n[5] Canceladas \n [0] Volver");
    const opcion = Number(prompt("Elija una opción para mostrar: "));
    let EstadosEnum;
    (function (EstadosEnum) {
        EstadosEnum["EnProceso"] = "en curso";
        EstadosEnum["Terminada"] = "terminada";
        EstadosEnum["Pendiente"] = "pendiente";
        EstadosEnum["Cancelada"] = "cancelada";
    })(EstadosEnum || (EstadosEnum = {}));
    //obejto para mapear las opciones
    const estados = {
        "2": EstadosEnum.EnProceso,
        "3": EstadosEnum.Terminada,
        "4": EstadosEnum.Pendiente,
        "5": EstadosEnum.Cancelada
    };
    while (opcion != 0) {
        if (opcion === 1) {
            const todasLasTareas = gestor.mostrarTarea();
            if (todasLasTareas.length === 0) {
                console.log("No hay tareas para mostrar.");
            }
            else {
                console.log("---LISTA DE TAREAS---");
                todasLasTareas.forEach(t => console.log(`[${t.id}] 📌 ${t.titulo}`)); //indice NO es el id
            }
            ;
        }
        else if (estados[opcion]) {
            const e = estados[opcion];
            //filtrar las tareas
            const tareasfiltradas = gestor.mostrarTarea().filter(t => t.estado === e);
            //verificar si se encontro algo
            if (tareasfiltradas.length === 0) {
                console.log(`No hay tareas para mostrar con el estado: "${e}"`);
            }
            else {
                console.log("---LISTA DE TAREAS---");
                tareasfiltradas.forEach(t => console.log(`[${t.id}] 📌 ${t.titulo}`));
            }
        }
        else {
            console.log("Opcion no valida.");
        }
    }
    //---DETALLE--
    const respuesta = prompt("Desea ver el detalle de alguna tarea? (s/n): ").toLowerCase();
    if (respuesta === 's') {
        const idTarea = parseInt(prompt("Ingrese el número de la tarea: "));
        //buscar la tarea por id
        const tareaEncontrada = gestor.mostrarTarea().find(t => t.id === idTarea);
        if (tareaEncontrada) {
            (0, detalleTarea_js_1.mostrarDetalle)(tareaEncontrada);
            //menuEditar(listaActual, id, gestor);
            {
                console.log("❌ No se encontró la tarea.");
            }
        }
    }
}
//const ordenarTitulos = 
