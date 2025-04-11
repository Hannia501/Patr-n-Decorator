// Interfaz base para todas las bebidas
interface Coffee {
    getDescription(): string;
    getCost(): number;
}

// Clase base para las bebidas concretas
abstract class BaseCoffee implements Coffee {
    protected description: string = "Bebida desconocida";

    getDescription(): string {
        return this.description;
    }

    abstract getCost(): number;
}

// Bebidas concretas
class Espresso extends BaseCoffee {
    constructor() {
        super();
        this.description = "Espresso";
    }

    getCost(): number {
        return 2.0;
    }
}

class Americano extends BaseCoffee {
    constructor() {
        super();
        this.description = "Americano";
    }

    getCost(): number {
        return 1.5;
    }
}

class Cappuccino extends BaseCoffee {
    constructor() {
        super();
        this.description = "Cappuccino";
    }

    getCost(): number {
        return 2.5;
    }
}

// Decorador abstracto
abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    getDescription(): string {
        return this.coffee.getDescription();
    }

    getCost(): number {
        return this.coffee.getCost();
    }
}

// Decoradores concretos
class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    getDescription(): string {
        return this.coffee.getDescription() + " + Leche";
    }

    getCost(): number {
        return this.coffee.getCost() + 0.5;
    }
}

class ChocolateDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    getDescription(): string {
        return this.coffee.getDescription() + " + Chocolate";
    }

    getCost(): number {
        return this.coffee.getCost() + 0.7;
    }
}

class CinnamonDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    getDescription(): string {
        return this.coffee.getDescription() + " + Canela";
    }

    getCost(): number {
        return this.coffee.getCost() + 0.3;
    }
}

// Sistema de pedidos
class CoffeeShop {
    createOrder(coffee: Coffee): void {
        console.log(`Pedido: ${coffee.getDescription()}`);
        console.log(`Precio: $${coffee.getCost().toFixed(2)}`);
    }
}

// Función principal
function main() {
    const coffeeShop = new CoffeeShop();

    // Crear un Espresso con leche y canela
    let coffee: Coffee = new Espresso();
    coffee = new MilkDecorator(coffee);
    coffee = new CinnamonDecorator(coffee);

    coffeeShop.createOrder(coffee);


    // Americano con chocolate
    let coffee2: Coffee = new Americano();
    coffee2 = new ChocolateDecorator(coffee2);
    coffeeShop.createOrder(coffee2);

    // Cappuccino con leche, chocolate y canela
    let coffee3: Coffee = new Cappuccino();
    coffee3 = new MilkDecorator(coffee3);
    coffee3 = new ChocolateDecorator(coffee3);
    coffee3 = new CinnamonDecorator(coffee3);
    coffeeShop.createOrder(coffee3);
}

main();
