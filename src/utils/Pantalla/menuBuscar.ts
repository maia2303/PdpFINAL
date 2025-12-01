import promptSync from "prompt-sync";
import { GestorTareas } from "../GestorTareas.js"; // instancia lista
import { Tarea } from "../../models/Tarea.js";
import { menuDetalles } from "./menuDetalle.js";

const prompt = promptSync();//

 //Función: buscarTarea
 // Solicita al usuario un título y busca todas las tareas que coincidan y mostrar todos los resultados en la consola
 // Muestra en consola los resultados encontrados.
 
export function buscarTarea(gestor: GestorTareas): void {
  //  Solicitar al usuario el título 
  const buscador = prompt("Ingrese el título de la tarea a buscar: ").trim();// trim quita espacios al inicio y al final de un String
                                           
  //  Llamar al método 'buscar' de la lista
  const resultados: Tarea[] = gestor.buscar(buscador);

  //  Mostrar los resultados
  if (resultados.length === 0) {
    console.log(" No se encontraron tareas con ese título.");
  } 
  else 
  {
    console.log(` Se encontraron ${resultados.length} tarea(s):`);
    resultados.forEach(tarea => {
      console.log(`📌[${tarea.id}]  ${tarea.titulo}`)    
    });

    menuDetalles(gestor, resultados);//para que el usuario eliga ver los detalles de las tareas encontradas
  }
}