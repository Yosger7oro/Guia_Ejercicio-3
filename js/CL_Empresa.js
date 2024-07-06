export default class CL_Empresa{
    constructor(){
       this.contclientasmayoredad=0;
       this.menoredad=999;
       this.acumedad=0;
       this.contclientes=0;
    }

    procesarcliente(c){
        if(c.sexo===2 && c.edad>=18){
            this.contclientasmayoredad++;
        }

        if(c.edad<this.menoredad){
            this.menoredad=c.edad;
        }

        this.acumedad+=c.edad

        this.contclientes++
    }

    promedadclientes(){
        return this.acumedad/this.contclientes;
    }

}
