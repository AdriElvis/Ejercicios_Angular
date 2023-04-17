export class Medico{
    static cont=0
    id:number
    nombre:string=""
    apellidos:string=""
    cedula:number=0
    foto:string=""

    constructor(nombre:string, apellidos:string, cedula:number, foto:string){
        this.id=++Medico.cont
        this.nombre=nombre
        this.apellidos=apellidos
        this.cedula=cedula
        this.foto=foto
    }

    mostrar():string{
        return "Nombre: "+this.nombre+" Apellidos: "+this.apellidos+" Cedula: "+this.cedula+" Foto: "+this.foto;
    }
}