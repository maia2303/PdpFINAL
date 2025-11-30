"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuEditar = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Tarea_js_1 = require("../../models/Tarea.js");
const prompt = (0, prompt_sync_1.default)();
// HACER QUE CUANDO LLAMO ESTA FUNCION SOLO TRAIGO UNA TAREA, NO HACE FALTA BUSCAR, Y PREGUNTAR SI QUIERE EDITAR O NO
const menuEditar = (listaActual, id, gestor) => {
    const tarea = listaActual.find(t => t.id === id);
    if (!tarea)
        return [...listaActual]; //Si no existe la tarea a editar, se devuelve sin hacer cambios
    console.log(`Editando la tarea ${tarea.titulo} (dejar vacío para mantener la información)`);
    const nuevoTitulo = prompt("Título: ");
    const nuevaDescripcion = prompt("Descripción: ");
    const nuevoEstadoInput = prompt(`Estado (${Tarea_js_1.ESTADOS.join(" | ")}): `).toLowerCase().trim();
    const nuevaDificultadInput = prompt(`Dificultad (${Tarea_js_1.DIFICULTADES.join(" | ")}): `).trim();
    // MEJORAR!!!! veamos si podemos los ifs q son muchos
    /*completar(id: number) {
      return new TareasLista(this.datos.map((i) =>
        i.id == id ? { ...i, estado: "completado" } : i
      ));
    }*/
    //objeto para cambios
    const cambios = {};
    // evitar any, usar Partial <Tarea> o <T> que significa que el objeto va a tener algunas propiedades de Tarea pero no necesariamente todas 
    // const cambios: Partial<Tarea> = {};
    if (nuevoTitulo.trim())
        cambios.titulo = nuevoTitulo;
    if (nuevaDescripcion.trim())
        cambios.descripcion = nuevaDescripcion;
    if (nuevoEstadoInput) {
        if (Tarea_js_1.ESTADOS.includes(nuevoEstadoInput)) {
            cambios.estado = nuevoEstadoInput;
        }
        else {
            console.log("Estado inválido, se mantiene el anterior...");
        }
    }
    if (nuevaDificultadInput) {
        const difNum = parseInt(nuevaDificultadInput);
        if (Tarea_js_1.DIFICULTADES.includes(difNum)) {
            cambios.dificultad = difNum;
        }
        else {
            console.log("Dificultad inválida, se mantiene el anterior...");
        }
    }
    cambios.ultimaEdicion = new Date().toISOString();
    return gestor.editar(listaActual, id, cambios);
};
exports.menuEditar = menuEditar;
