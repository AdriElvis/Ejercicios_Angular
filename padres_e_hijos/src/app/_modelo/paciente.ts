export class Paciente{
    static cont=0
    id:number
    nombre:string=""
    apellidos:string=""

    constructor(nombre:string, apellidos:string){
        this.id=++Paciente.cont
        this.nombre=nombre
        this.apellidos=apellidos
    }

    mostrar():string{
        return "Nombre: "+this.nombre+" Apellidos: "+this.apellidos
    }
}