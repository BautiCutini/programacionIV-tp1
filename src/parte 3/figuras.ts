/**
 * EJERCICIO 12 - Clase abstracta Figura
 * ---------------------------------------------------------------------------
 * `Figura` no se puede instanciar directamente: cada subclase debe
 * implementar calcularArea() y calcularPerimetro() a su manera.
 * Ahí aparece el polimorfismo: un mismo arreglo `Figura[]` puede contener
 * círculos, rectángulos y cuadrados, y a cada uno se le puede pedir su área
 * sin saber de qué tipo concreto es.
 */
export abstract class Figura {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;
}

export class Circulo extends Figura {
    constructor(private radio: number) {
        super();
    }

    calcularArea(): number {
        const area = Math.PI * (this.radio * this.radio);
        return area;
    }

    calcularPerimetro(): number {
        const perimetro = 2 * Math.PI * this.radio;
        return perimetro;
    }
}

export class Rectangulo extends Figura {
    constructor(
        private base: number,
        private altura: number
    ) {
        super();
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        var perimetro = 2 * ( this.base + this.altura);
        return perimetro;
    }
}

export class Cuadrado extends Figura {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }
}
