
export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
export const amount = {
    items: [],
    sum() {
        let result = 0;
        for (const item of this.items) {
            result = result + item.price;
        }
        return result;
    },

    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    },

    findMoreExpensiveProduct() {
       let price = this.items[0].price;
       let name = this.items[0].name;
        for (const item of this.items) {
            if (price < item.price) {
                price = item.price;
                name = item.name;
            }
        }
        return name + ' ' + price + 'руб.';
    }
};

