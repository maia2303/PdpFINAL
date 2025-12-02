"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularEstadisticas = calcularEstadisticas;
//funcion pura, va a recibir un array de tareas y devuelve un objeto reporte
function calcularEstadisticas(tareas) {
    //valor inicial
    const reporteInicial = {
        total: 0,
        pendientes: 0,
        enCurso: 0,
        terminadas: 0,
        canceladas: 0
    };
    return tareas.reduce((contador, tarea) => {
        contador.total += 1;
        switch (tarea.estado) {
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
