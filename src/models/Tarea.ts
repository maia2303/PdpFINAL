// 
export const Estados = ["pendiente" , "en curso" , "terminada" , "cancelada"] as const; 
export const Dificultades = [1 , 2 , 3] as const;



export type Estado = typeof Estados [number];
export type Dificultad = typeof Dificultades[number];


export interface Tarea {
    readonly id: number,
    readonly titulo: string;
    readonly descripcion: string;
    readonly estado: Estado;
    readonly dificultad: Dificultad;
    readonly vencimiento: string | null;
    readonly creacion: string; //en los datos la creacion y ultima edicion se declaran como string y despues pasan a nueva fecha
    readonly ultimaEdicion: string;
    readonly eliminada: boolean; // indica si la tarea esta marcada como eliminada (Soft delete) 
}