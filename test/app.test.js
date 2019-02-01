import {amount, Product} from "../src/js/lib.js";


test ('should calculate sum', () => {
    amount.items = [new Product('', 100), new Product('', 200), new Product('', 300)];
    const result = amount.sum();

    expect(result).toBe(600);

});