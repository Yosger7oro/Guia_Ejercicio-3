export default class CL_Cliente{
    constructor(no,ts,ed,se){
        this.nombre=no;
        this.tiposervicio=ts;
        this.edad=ed;
        this.sexo=se;
    }

    set nombre(n){
        return this._nombre=n;
    }

    get nombre(){
        return this._nombre;
    }

    set tiposervicio(t){
        return this._tiposervicio=t;
    }

    get tiposervicio(){
        return this._tiposervicio;
    }

    set edad(e){
        return this._edad=e;
    }

    get edad(){
        return this._edad;
    }

    set sexo(s){
        return this._sexo=s;
    }

    get sexo(){
        return this._sexo;
    }
}