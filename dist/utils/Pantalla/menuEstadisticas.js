"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuEstadisticas = menuEstadisticas;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function menuEstadisticas(gestor) {
    console.clear();
    console.log("=== 📊 REPORTE DE ESTADÍSTICAS ===");
    try {
        // Pedimos los datos al gestor
        const estadisticas = gestor.obtenerEstadisticas();
        // Mostramos los resultados
        console.log(`\nTotal de Tareas Activas: ${estadisticas.total}`);
        console.log("--------------------------------");
        console.log(`📝 Pendientes:  ${estadisticas.pendientes}`);
        console.log(`⏳ En curso:    ${estadisticas.enCurso}`);
        console.log(`✅ Terminadas:  ${estadisticas.terminadas}`);
        console.log(`❌ Canceladas:  ${estadisticas.canceladas}`);
        console.log("--------------------------------");
    }
    catch (error) {
        console.error("Error al calcular las estadísticas: ", error);
    }
    prompt("\nPresiona Enter para volver...");
}
