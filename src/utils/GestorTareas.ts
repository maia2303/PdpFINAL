import fs from 'fs';//para leer y escribir el archivo json
<<<<<<< HEAD
import { Tarea, Estado, Dificultad } from '../models/Tarea'; //Correccion de la ruta
=======
import { Tarea, Estado, Dificultad } from '../models/Tarea';
>>>>>>> feaacf76c8a172e62c8e23b92f82069cda9c4c46

//const archivo = "./tareas.json"; //indice de la ruta del archivo que va a leer
const estadosValidos = ["pendiente", "en curso", "terminada", "cancelada"];
const dificultadValida = [ 1, 2, 3];

export class Lista 
{
    Lista: Tarea[]; //Lista es un array de tipo Tarea

    constructor()
    {
        //this.Lista = tareas.map(e => new Tarea(e.id, e.titulo, e.descripcion, e.dificultad)); //para que cada tarea que esta en el tasks se instancien como una tarea.

        this.Lista = []; //esto por ahora como básico para desp agregarle la lectura del archivo json
    }

    //metodo para agregar la tarea

    agregar(tarea: Tarea){
        this.Lista.push(tarea);


    }

    // Método buscar: recibe un título y devuelve un arreglo de tareas coincidentes
  buscar(titulo: string): Tarea[] {
    const busqueda = titulo.toLowerCase();

    // Filtramos las tareas que contienen la palabra buscada
    const resultados = this.Lista.filter(tarea =>
      tarea.titulo.toLowerCase().includes(busqueda)
    );

    return resultados; // devuelve el arreglo de coincidencias
  }
}
