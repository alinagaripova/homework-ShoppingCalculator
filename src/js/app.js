import {Amount, Product} from "./lib.js";

const nameEl = document.getElementById('name');
const priceEl = document.getElementById('price');
const amountPriceEl = document.getElementById('amountPrice');
const amountProductEl = document.getElementById('amountProduct');
const priceExpProductEl = document.getElementById('priceExpensiveProduct');
const addEl = document.getElementById('add');
const removeEl = document.getElementById('remove');


const amount = new Amount();

addEl.addEventListener('click', function (evt) {
    const name = nameEl.value;
    const price = parseInt(priceEl.value);
    if (price > 0) {
        const product = new Product(name, price);
        // const amount = new Amount();

        amount.add(product);

        amountPriceEl.textContent = amount.sum() + ' руб.';
        amountProductEl.textContent = amount.items.length;

        priceExpProductEl.textContent = amount.findMoreExpensiveProduct();
    } else {
        amountPriceEl.textContent = ' Покупка не добавлена.Введите положительное число в поле "Стоимость".'
    }
});



