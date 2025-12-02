import { sortBy } from "lodash";
import { Tarea } from "../../models/Tarea";

export type ordenCriterio = 'titulo' | 'vencimiento' | 'creacion' | 'dificultad';
export type Orden = 'asc' | 'desc';

export const ordenarTarea = (
    lista: readonly Tarea[],
    criterio: ordenCriterio,
    orden: Orden = 'asc'
): Tarea[] => {
    //sortBy de lodash
    const listaOrdenada = sortBy(lista, [criterio]);
    //sortBy ordena ascendiente
    return orden === 'desc' ? listaOrdenada.reverse() : listaOrdenada;

}
