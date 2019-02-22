import {AmountLocalStorage, Product} from "../src/js/storage.js";

const amount = new AmountLocalStorage();

test ('should calculate sum', () => {
    amount.items = [new Product('', 100), new Product('', 200), new Product('', 300)];
    const result = amount.sum();

    expect(result).toBe(600);

});
test ('should calculate MoreExpensiveProduct', () => {
    amount.items = [new Product('Помидоры', 100), new Product('Сыр', 200), new Product('Мясо', 300)];
    const result = amount.findMoreExpensiveProduct();

    expect(result).toBe('Мясо ' + 300 + ' руб.');

});