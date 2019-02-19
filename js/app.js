import {amount, Product} from "./lib.js";

const nameEl = document.getElementById('name');
const priceEl = document.getElementById('price');
const amountPriceEl = document.getElementById('amountPrice');
const amountProductEl = document.getElementById('amountProduct');
const priceExpProductEl = document.getElementById('priceExpensiveProduct');
const addEl = document.getElementById('add');
const removeEl = document.getElementById('remove');

addEl.addEventListener('click', function (evt) {
    const name = nameEl.value;
    const price = parseInt(priceEl.value);
    const product = new Product(name, price);

    amount.items.push(product);

    amountPriceEl.textContent = amount.sum() + ' руб.';
    amountProductEl.textContent = amount.items.length;

    priceExpProductEl.textContent = amount.findMoreExpensiveProduct();
});



