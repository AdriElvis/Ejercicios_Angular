export class Bicicleta{

    color:string="";
    marca:string="";
    velocidad:number=0;
    pinones:number=0;
    platos:number=0;
    electrica:boolean=false;

    constructor(color:string, marca:string, velocidad:number, pinones:number, platos:number, electrica:boolean){
        this.color=color;
        this.marca=marca;
        this.velocidad=velocidad;
        this.pinones=pinones;
        this.platos=platos;
        this.electrica=electrica;
    }

    public acelerar(velocidad:number){
        this.velocidad = this.velocidad+velocidad;
    }

    public frenar(velocidad:number){
        this.velocidad = this.velocidad-velocidad;
    }

    public mostrar(){

        return "Color: "+this.color+"  Marca: "+this.marca+"  Piñones: "+this.pinones+"  Platos: "+this.platos+"  Electrica: "+(this.electrica?"no":"sí")+"  Velociad: "+this.velocidad;
    }
}