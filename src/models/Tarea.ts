export enum Estado {
    pendiente = "pendiente",
    enCurso = "en curso",
    terminada = "terminada",
    cancelada = "cancelada"
}

export enum Dificultad {
    Facil = 1,
    Medio = 2,
    Dificil = 3
}

export interface Tarea {
    readonly id: string,
    readonly titulo: string;
    readonly descripcion: string;
    readonly estado: Estado;
    readonly dificultad: Dificultad;
    readonly vencimiento: Date;
    readonly creacion: Date; 
    readonly ultimaEdicion: Date;
    readonly eliminada: boolean; // indica si la tarea esta marcada como eliminada (Soft delete) 
}
