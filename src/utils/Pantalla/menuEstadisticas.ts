import { GestorTareas } from "../GestorTareas";
import promptSync from 'prompt-sync';

const prompt = promptSync();

export function menuEstadisticas(gestor: GestorTareas) {
    console.clear();
    console.log("=== 📊 REPORTE DE ESTADÍSTICAS ===");
    
    try{
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
    } catch (error) {
        console.error("Error al calcular las estadísticas: ", error);
    }
    prompt("\nPresiona Enter para volver...");
}