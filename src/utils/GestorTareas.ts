//tuvimos que instalar los tipos de node para que sepa qie es fs
import * as fs from 'fs'; //importamos el sistema de archivos 
import { Tarea, Estado, Dificultad, DIFICULTADES, ESTADOS } from '../models/Tarea'; //Correccion de la ruta
import { eliminarTarea } from './FuncionesPuras/eliminarTarea'; // importamos la funcion de eliminacion para usar el metodo eliminar
import { calcularEstadisticas, Reporte } from './FuncionesPuras/calcularEstadisticas';

const rutaArchivo = "./tareas.json"//indice de la ruta del archivo que va a leer

export class GestorTareas 
{
  private tareas: Tarea[]; //gestor es un array de tipo Tarea inicializado

  constructor()
  {
    this.tareas = [];
    //al instanciar el gestor intentamos cargar los datos guardados
    this.leer();
  }

  // METODOS DE PERSISTENCIA
  //guardar en el disco
  private guardar(): void
  {
    try
    {
      //convertir el array de objetos a texto
      const data = JSON.stringify(this.tareas, null,2); //null es para devolver todo los elementos de la tarea y el 2 es para que se vea ordenado
      //guardamos los datos de forma sincronica, asi nos aseguramos que esten guardados antes de seguir
      fs.writeFileSync(rutaArchivo, data, 'utf-8');
    } catch(error)
    {
      console.error("Error al guardar las tareas: ", error);
    }
  }

  //leer el disco
  private leer():void 
  {
    //verificar que el archivo existe para evitar errores
    if(fs.existsSync(rutaArchivo))
    {
      try
      {
        //leer el archivo como texto
        const data = fs.readFileSync(rutaArchivo, 'utf-8');

        //convertirlo a objeto de vuelta
        this.tareas = JSON.parse(data);
      }catch (error)
      {
        console.error("Error al leer el archivo de tareas:", error);
        this.tareas = [] //si falla, iniciamos vacío
      }
    }
    else
    {
      //si no existe inicializar vacío
      this.tareas = [];
    }
  }

  //metodo para agregar la tarea al archivo json

  agregar = (nuevaTarea: Tarea ): void => {
    this.tareas.push(nuevaTarea); 
    //cada vez que modificamos el array, llamamos a guardar
    this.guardar();
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
        
  public editar (id: number, cambio: Partial<Omit<Tarea, 'id' | 'creacion' >>): void //solo se permite el cambio en algunos campos, por ej en id para evitar errores en el filtrado
  {
    const nuevaLista = this.tareas.map(t => {
        if(t.id === id){
            return Object.freeze({
                ...t, //copia las propiedades anteriores de la tareaa
                ...cambio, // sobreescribe las nuevas propiedades
                ultimaEdicion: new Date().toLocaleString() // se actualiza la fecha de creación
            });
        }
        return t;
    });
    this.tareas = nuevaLista;
    this.guardar(); //sobreescribe el archivo con la nueva lista
}

  getTarea(): Tarea[] 
  {
    return this.tareas.filter(t => !t.eliminada); //devuelve un array de tareas con solo las que no estan eliminadas   
  }


  eliminarTarea = (id: number): boolean => {
    const TareaExiste = this.tareas.some(t => t.id === id && !t.eliminada);
      if(TareaExiste){
        const nuevaLista = eliminarTarea(this.tareas, id);
        this.tareas = nuevaLista;
        this.guardar();
        return true;
      }
        return false;
  }

//metodo para las estadisticas
obtenerEstadisticas(): Reporte
{
  return calcularEstadisticas(this.getTarea());//ver si es muy necesario
}

}
