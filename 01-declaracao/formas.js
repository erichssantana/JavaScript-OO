class Forma {

    constructor () {
        this.tipodeForma = 'Forma Abtrata';
    }

    imprimeForma() {
        // alert( 'Tipo de forma; ${this.tipodeForma} - Area: ${this.calculaAres()}');
        alert(`Tipo de forma; ${this.tipodeForma}  - Area: ${this.calculaArea()}`);
    }

    calculaArea() {
        throw new Error('O metodo calculaArea() deve ser implementado na subclasse');
    }
}