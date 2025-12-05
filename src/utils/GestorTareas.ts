//tuvimos que instalar los tipos de node para que sepa que es fs
import * as fs from 'fs'; //importamos el sistema de archivos 
import { Tarea, Estado, Dificultad } from '../models/Tarea'; //Correccion de la ruta
import { eliminarTarea } from './FuncionesPuras/eliminarTarea'; // importamos la funcion de eliminacion para usar el metodo eliminar
import { crearObjetoTarea } from './FuncionesPuras/crearTarea';
import { calcularEstadisticas, Reporte } from './FuncionesPuras/calcularEstadisticas';
import { v4 as uuidv4 } from 'uuid';
import { ordenarTarea, ordenCriterio } from './FuncionesPuras/ordenarTareas';
import { editarTarea } from './FuncionesPuras/editarTarea';

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

  agregar = (id: number, titulo: string, descripcion: string, estado: Estado, dificultad: Dificultad, vencimiento: Date): void => {
    const idUnico = uuidv4();
    const fechaActual = new Date();

    const nuevaTarea = crearObjetoTarea(
      idUnico,
      id,
      titulo,
      descripcion,
      estado,
      dificultad,
      vencimiento,
      fechaActual
    );

    this.tareas.push(nuevaTarea); 
    //cada vez que modificamos el array, llamamos a guardar
    this.guardar();
  }

  // Método buscar: recibe un título y devuelve un arreglo de tareas coincidentes
  buscar = (titulo: string): Tarea[] => {
    const busqueda = titulo.toLowerCase();

    // Filtramos las tareas que contienen la palabra buscada, usamos get tareas para solo buscar las activas
    const resultados = this.getTareas().filter(tarea =>
      tarea.titulo.toLowerCase().includes(busqueda)
    );

    return resultados; // devuelve el arreglo de coincidencias
  }
        
  public editar (id: number, cambio: Partial<Omit<Tarea, 'id' | 'creacion' >>): void //solo se permite el cambio en algunos campos, por ej en id para evitar errores en el filtrado
  {
    const fechaEdicion = new Date();


    this.tareas = editarTarea(this.tareas, id, cambio, fechaEdicion);
    this.guardar(); //sobreescribe el archivo con la nueva lista
  }

  getTareas(): Tarea[] 
  {
    return this.tareas.filter(t => !t.eliminada); //devuelve un array de tareas con solo las que no estan eliminadas   
  }
  todasTareas(): Tarea[]//para usar en el nuevoID
  {
    return this.tareas; //devuelve todas las tareas, incluidas las eliminadas
  }


  eliminar = (id: number): boolean => {
    const TareaExiste = this.tareas.some(t => t.id === id && !t.eliminada);
      if(TareaExiste){
        const fechaActual = new Date();

        this.tareas = eliminarTarea(this.tareas, id, fechaActual);
        
        this.guardar();
        return true;
      }
      return false;
  }

//metodo para las estadisticas
obtenerEstadisticas(): Reporte
{
  return calcularEstadisticas(this.getTareas());//ver si es muy necesario
}

//metodo para ordenar tareas
public ordenar(criterio: ordenCriterio): void { //no modifica el array original
        const tareasOrdenadas = ordenarTarea(this.tareas, criterio);
        this.tareas = tareasOrdenadas;
        //opcional para guardar en el JSON inmediatamente
        //this.guardarTarea();
        console.log(`Lista ordenada por: ${criterio.toUpperCase()}`);
}
}