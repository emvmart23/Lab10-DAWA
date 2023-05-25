export class Curso {

    _id?: string;
    nombre: string;
    categoria: string;
    duracion: string;
    fechaCreacion: number;

    constructor(nombre:string, categoria:string, duracion: string, fechaCreacion: number){
        this.nombre = nombre;
        this.categoria = categoria;
        this.duracion = duracion;
        this.fechaCreacion = fechaCreacion;
    }

}