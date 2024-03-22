class Quadrado extends Forma {

    constructor (lado){
        super();
        this.tipodeForma = 'Quadrado';
        this.lado = lado;
    }

    calculaArea() {
        return this.lado * this.lado;
    }
}
