"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuEditar = menuEditar;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Tarea_js_1 = require("../../models/Tarea.js");
const prompt = (0, prompt_sync_1.default)();
//va a devolver solo una tarea no toda la lista
function menuEditar(tarea, gestor) {
    //if(!tarea) return [...listaActual]; esto se iria porque aca directamente trabaja sobre la tarea existente, este if debería ir en otra parte y no aca, para mantener la lógica de llamado en mostrar detalle
    // //Si no existe la tarea a editar, se devuelve sin hacer cambios
    console.log(`Editando la tarea ${tarea.titulo} \n (dejar vacío para mantener la información)`);
    //si el usuario solo aprieta enter deja la información qu eya estaba
    const nuevoTitulo = prompt(`Título (${tarea.titulo}): ` || tarea.titulo);
    const nuevaDescripcion = prompt(`Descripción (${tarea.descripcion}): ` || tarea.descripcion);
    const nuevoVencimientoinput = prompt(`Vencimiento (${tarea.vencimiento}): ` || "N/A");
    const nuevoVencimiento = nuevoVencimientoinput !== "" ? nuevoVencimientoinput : tarea.vencimiento;
    //se valida estado solo si el usuario escribe algo
    let nuevoEstado = tarea.estado;
    const nuevoEstadoInput = prompt(`Estado (${tarea.estado}) [En curso | Terminada | Pendiente | Cancelada]: `);
    let nuevaDificultad = tarea.dificultad;
    const nuevaDificultadInput = prompt(`Dificultad (${tarea.dificultad}) [1] Fácil [2] Medio [3] Difícil:  `);
    if (nuevaDificultadInput !== "") {
        const dificultadN = parseInt(nuevaDificultadInput);
        if (Tarea_js_1.DIFICULTADES.includes(dificultadN)) {
            nuevaDificultad = dificultadN;
        }
        else {
            console.log("Valor inválido, se mantiene la dificultad original");
        }
    }
    const confirmar = prompt("¿Guardar cambios? (s/n)");
    if (confirmar === 's') {
        const cambios = {
            titulo: nuevoTitulo,
            descripcion: nuevaDescripcion,
            vencimiento: nuevoVencimiento,
            estado: nuevoEstado,
            dificultad: nuevaDificultad
        };
        const listaActualizada = gestor.editar(tarea.id, cambios);
        console.log("Tarea actualizada con éxito...");
    }
    else {
        console.log("Edición cancelada...");
    }
    /*  SACAR TODO ESTO
    
    
    
    
    
    
    
    
    
        // MEJORAR!!!! veamos si podemos los ifs q son muchos
        completar(id: number) {
          return new TareasLista(this.datos.map((i) =>
            i.id == id ? { ...i, estado: "completado" } : i
          ));
        }
        //objeto para cambios
    
        const cambios: any = {};
        // evitar any, usar Partial <Tarea> o <T> que significa que el objeto va a tener algunas propiedades de Tarea pero no necesariamente todas
        // const cambios: Partial<Tarea> = {};
        if(nuevoTitulo.trim()) cambios.titulo = nuevoTitulo;
        if(nuevaDescripcion.trim()) cambios.descripcion = nuevaDescripcion;
    
    
        if(nuevoEstadoInput){
            if((ESTADOS as readonly string[]).includes(nuevoEstadoInput)){
                cambios.estado = nuevoEstadoInput as Estado;
            } else{
                    console.log("Estado inválido, se mantiene el anterior...");
            }
        }
    
        if(nuevaDificultadInput){
            const difNum = parseInt(nuevaDificultadInput)
            if ((DIFICULTADES as readonly number[]).includes(difNum)) {
                cambios.dificultad = difNum as Dificultad;
            } else {
                console.log("Dificultad inválida, se mantiene el anterior...");
            }
        }
    
    
        cambios.ultimaEdicion = new Date().toISOString();
        
        return gestor.editar(listaActual, id, cambios);
    */
}
;
