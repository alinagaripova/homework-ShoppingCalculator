export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

export class Amount {
    constructor() {
        this.items = []
    }
    add(item) {
        this.items.push(item); //количество покупок
    }
    sum() { //общая стоимость покупок
        let result = 0;
        for (const item of this.items) {
            result = result + item.price;
        }
        return result;
    }

    findMoreExpensiveProduct() { //самая дорогая покупка
        let price = this.items[0].price;
        let name = this.items[0].name;
        for (const item of this.items) {
            if (price < item.price) {
                price = item.price;
                name = item.name;
            }
        }
        return name + ' ' + price + ' руб.';
    }
}

