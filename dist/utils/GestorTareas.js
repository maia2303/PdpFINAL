"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorTareas = void 0;
//tuvimos que instalar los tipos de node para que sepa qie es fs
const fs = __importStar(require("fs")); //importamos el sistema de archivos 
const eliminarTarea_1 = require("./FuncionesPuras/eliminarTarea"); // importamos la funcion de eliminacion para usar el metodo eliminar
const calcularEstadisticas_1 = require("./FuncionesPuras/calcularEstadisticas");
const ordenarTareas_1 = require("./FuncionesPuras/ordenarTareas");
const rutaArchivo = "./tareas.json"; //indice de la ruta del archivo que va a leer
class GestorTareas {
    constructor() {
        //metodo para agregar la tarea al archivo json
        this.agregar = (nuevaTarea) => {
            this.tareas.push(nuevaTarea);
            //cada vez que modificamos el array, llamamos a guardar
            this.guardar();
        };
        // Método buscar: recibe un título y devuelve un arreglo de tareas coincidentes
        this.buscar = (titulo) => {
            const busqueda = titulo.toLowerCase();
            // Filtramos las tareas que contienen la palabra buscada
            const resultados = this.tareas.filter(tarea => tarea.titulo.toLowerCase().includes(busqueda));
            return resultados; // devuelve el arreglo de coincidencias
        };
        this.eliminarTarea = (id) => {
            const TareaExiste = this.tareas.some(t => t.id === id && !t.eliminada);
            if (TareaExiste) {
                const nuevaLista = (0, eliminarTarea_1.eliminarTarea)(this.tareas, id);
                this.tareas = nuevaLista;
                this.guardar();
                return true;
            }
            return false;
        };
        this.tareas = [];
        //al instanciar el gestor intentamos cargar los datos guardados
        this.leer();
    }
    // METODOS DE PERSISTENCIA
    //guardar en el disco
    guardar() {
        try {
            //convertir el array de objetos a texto
            const data = JSON.stringify(this.tareas, null, 2); //null es para devolver todo los elementos de la tarea y el 2 es para que se vea ordenado
            //guardamos los datos de forma sincronica, asi nos aseguramos que esten guardados antes de seguir
            fs.writeFileSync(rutaArchivo, data, 'utf-8');
        }
        catch (error) {
            console.error("Error al guardar las tareas: ", error);
        }
    }
    //leer el disco
    leer() {
        //verificar que el archivo existe para evitar errores
        if (fs.existsSync(rutaArchivo)) {
            try {
                //leer el archivo como texto
                const data = fs.readFileSync(rutaArchivo, 'utf-8');
                //convertirlo a objeto de vuelta
                this.tareas = JSON.parse(data);
            }
            catch (error) {
                console.error("Error al leer el archivo de tareas:", error);
                this.tareas = []; //si falla, iniciamos vacío
            }
        }
        else {
            //si no existe inicializar vacío
            this.tareas = [];
        }
    }
    editar(id, cambio) {
        const nuevaLista = this.tareas.map(t => {
            if (t.id === id) {
                return Object.freeze(Object.assign(Object.assign(Object.assign({}, t), cambio), { ultimaEdicion: new Date().toLocaleString() // se actualiza la fecha de creación
                 }));
            }
            return t;
        });
        this.tareas = nuevaLista;
        this.guardar(); //sobreescribe el archivo con la nueva lista
    }
    getTarea() {
        return this.tareas.filter(t => !t.eliminada); //devuelve un array de tareas con solo las que no estan eliminadas   
    }
    //metodo para las estadisticas
    obtenerEstadisticas() {
        return (0, calcularEstadisticas_1.calcularEstadisticas)(this.getTarea()); //ver si es muy necesario
    }
    //metodo para ordenar tareas
    ordenar(criterio) {
        const tareasOrdenadas = (0, ordenarTareas_1.ordenarTarea)(this.tareas, criterio);
        this.tareas = tareasOrdenadas;
        //opcional para guardar en el JSON inmediatamente
        //this.guardarTarea();
        console.log(`Lista ordenada por: ${criterio}`);
    }
}
exports.GestorTareas = GestorTareas;
