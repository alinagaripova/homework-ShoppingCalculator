import {Product, AmountLocalStorage} from "./storage.js";

const nameEl = document.getElementById('name');
const priceEl = document.getElementById('price');
const amountPriceEl = document.getElementById('amountPrice');
const amountProductEl = document.getElementById('amountProduct');
const priceExpProductEl = document.getElementById('priceExpensiveProduct');
const addEl = document.getElementById('add');
const errorEl = document.getElementById('error');
const removeEl = document.getElementById('remove');


const amount = new AmountLocalStorage();

addEl.addEventListener('click', function (evt) {
    const name = nameEl.value;
    const price = parseInt(priceEl.value);
    if (price > 0) {
        const product = new Product(name, price);
        amount.add(product);
        amountPriceEl.textContent = amount.sum() + ' руб.';

        amountProductEl.textContent = amount.items.length;
        priceExpProductEl.textContent = amount.findMoreExpensiveProduct();
        errorEl.textContent = '';
    } else {
        errorEl.textContent = ' Покупка не добавлена.Введите положительное число в поле "Стоимость".'
    }
    nameEl.value = ' ';
    priceEl.value = ' ';

});

removeEl.addEventListener('click', (evt) => {
    amount.clear();
    amountProductEl.textContent = '0';
    amountPriceEl.textContent = '0';
    priceExpProductEl.textContent = ' - ';
});

amountProductEl.textContent = amount.items.length;
amountPriceEl.textContent = amount.sum() + ' руб.';
priceExpProductEl.textContent = amount.findMoreExpensiveProduct();



