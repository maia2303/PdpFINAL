import {Tarea} from "../../models/Tarea"

//Definimos la forma que va a tener el reporte Por ahora solo va a sacar estadisticas por estado
export interface Reporte
{
    total:number,
    pendientes: number,
    enCurso: number,
    terminadas: number,
    canceladas: number
}

//funcion pura, va a recibir un array de tareas y devuelve un objeto reporte
export function calcularEstadisticas(tareas: Tarea[]): Reporte
{
    //valor inicial
    const reporteInicial: Reporte =
    {
        total:0,
        pendientes:0,
        enCurso: 0,
        terminadas: 0,
        canceladas: 0
    };

    return tareas.reduce<Reporte>((contador, tarea) =>
    {
        contador.total += 1;
        switch(tarea.estado)
        {
            case "pendiente":
                contador.pendientes += 1;
                break;
            case "en curso":
                contador.enCurso += 1;
                break;
            case "terminada":
                contador.terminadas += 1;
                break;
            case "cancelada":
                contador.terminadas += 1;
                break;
        }
        return contador; //devuelve el contador modificado para la siguiente vuelta
    }, reporteInicial);
}