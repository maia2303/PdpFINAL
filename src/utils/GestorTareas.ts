//import fs from 'fs';//para leer y escribir el archivo json
import { Tarea, Estado, Dificultad, DIFICULTADES, ESTADOS } from '../models/Tarea'; //Correccion de la ruta

//const archivo = "./tareas.json"; //indice de la ruta del archivo que va a leer

export class GestorTareas 
{
  private tareas: Tarea[]; //gestor es un array de tipo Tarea

  constructor()
  {
    //this.GestorTareas = tareas.map(e => new Tarea(e.id, e.titulo, e.descripcion, e.dificultad)); //para que cada tarea que esta en el tasks se instancien como una tarea.
    this.tareas = []; //esto por ahora como básico para desp agregarle la lectura del archivo json
  }

  //metodo para agregar la tarea

  agregar = (nuevaTarea: Tarea ): void => {
    this.tareas.push(nuevaTarea); 
  }

  // Método buscar: recibe un título y devuelve un arreglo de tareas coincidentes
  buscar = (titulo: string): Tarea[] => {
    const busqueda = titulo.toLowerCase();

    // Filtramos las tareas que contienen la palabra buscada
    const resultados = this.tareas.filter(tarea =>
      tarea.titulo.toLowerCase().includes(busqueda)
    );

    return resultados; // devuelve el arreglo de coincidencias
  }

  editar = 
    (
        lista: readonly Tarea[], 
        id: number,
        cambio: Partial<Omit<Tarea, 'id' | 'creacion' >> //solo se permite el cambio en algunos campos, por ej en id para evitar errores en el filtrado
    ): Tarea[]  => {
        return lista.map(t => {
            if(t.id === id){
                return Object.freeze({
                    ...t, //copia las propiedades anteriores de la tareaa
                    ...cambio, // sobreescribe las nuevas propiedades
                    ultimaEdicion: new Date().toLocaleString() // se actualiza la fecha de creación
                });
            }
            return t;
        });
};

  mostrarTarea(): Tarea[] 
  {
    return [...this.tareas];//es un metodo que devuelve una copia para seguridad del array
  }
}
