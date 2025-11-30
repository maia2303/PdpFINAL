"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorTareas = void 0;
//const archivo = "./tareas.json"; //indice de la ruta del archivo que va a leer
class GestorTareas {
    constructor() {
        //metodo para agregar la tarea
        this.agregar = (nuevaTarea) => {
            this.tareas.push(nuevaTarea);
        };
        // Método buscar: recibe un título y devuelve un arreglo de tareas coincidentes
        this.buscar = (titulo) => {
            const busqueda = titulo.toLowerCase();
            // Filtramos las tareas que contienen la palabra buscada
            const resultados = this.tareas.filter(tarea => tarea.titulo.toLowerCase().includes(busqueda));
            return resultados; // devuelve el arreglo de coincidencias
        };
        this.editar = (lista, id, cambio //solo se permite el cambio en algunos campos, por ej en id para evitar errores en el filtrado
        ) => {
            return lista.map(t => {
                if (t.id === id) {
                    return Object.freeze(Object.assign(Object.assign(Object.assign({}, t), cambio), { ultimaEdicion: new Date().toLocaleString() // se actualiza la fecha de creación
                     }));
                }
                return t;
            });
        };
        //this.GestorTareas = tareas.map(e => new Tarea(e.id, e.titulo, e.descripcion, e.dificultad)); //para que cada tarea que esta en el tasks se instancien como una tarea.
        this.tareas = []; //esto por ahora como básico para desp agregarle la lectura del archivo json
    }
    getTarea() {
        return [...this.tareas]; //es un metodo que devuelve una copia para seguridad del array
    }
}
exports.GestorTareas = GestorTareas;
