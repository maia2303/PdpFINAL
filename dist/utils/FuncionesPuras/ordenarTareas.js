"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordenarTarea = void 0;
const lodash_1 = require("lodash");
const ordenarTarea = (lista, criterio, orden = 'asc') => {
    //sortBy de lodash
    const listaOrdenada = (0, lodash_1.sortBy)(lista, [criterio]);
    //sortBy ordena ascendiente
    return orden === 'desc' ? listaOrdenada.reverse() : listaOrdenada;
};
exports.ordenarTarea = ordenarTarea;
