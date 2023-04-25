export class Curso{
    static cont=0
    idCurso:number
    nombre:string=""
    duracion:number=0
    nivel:Nivel

    constructor(nombre:string, duracion:number, nivel:Nivel){
        this.idCurso=++Curso.cont
        this.nombre=nombre
        this.duracion=duracion
        this.nivel=nivel
    }
}

export enum Nivel{
    iniciacion="iniciacion",
    intermedio="intermedio",
    avanzado="avanzado"
}