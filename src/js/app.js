import {amount, Product} from "./lib.js";

    const nameEl = document.getElementById('name');
    const priceEl = document.getElementById('price');
    const amountPriceEl = document.getElementById('amountPrice');
    const amountProductEl = document.getElementById('amountProduct');
    const priceExpProductEl = document.getElementById('priceExpensiveProduct');
    const addEl = document.getElementById('add');
    const removeEl = document.getElementById('remove');

    // function reactToAddClick() {
    //     const name = nameEl.value;
    //     const price = parseInt(priceEl.value);
    //     const product = new Product(name, price);
    //
    //     amount.items.push(product);
    //     amountPriceEl.textContent = amount.sum() + ' руб.';
    //     amountProductEl.textContent = amount.items.length;
    // }

    addEl.addEventListener('click', function (evt) {
        const name = nameEl.value;
        const price = parseInt(priceEl.value);
        const product = new Product(name, price);

        amount.items.push(product);

        amountPriceEl.textContent = amount.sum() + ' руб.';
        amountProductEl.textContent = amount.items.length;

        priceExpProductEl.textContent = amount.findMoreExpensiveProduct();
    });

    // TODO: remove и в HTML тоже
    removeEl.addEventListener('click', function (evt) {
        const name = nameEl.value;
        const price = parseInt(priceEl.value);
        const product = new Product(name, price);

        amount.remove(product);
        amountPriceEl.textContent = amount.sum() + ' руб.';
        amountProductEl.textContent = amount.items.length;
    });




    // // amountPriceEl.textContent = amountPrice;
    // addEl.addEventListener('click', function (evt) {
    //     let amountPrice = 0;
    //     const price = parseInt(priceEl.value);
    //     amountPrice = amountPrice + price;
    //     // console.log(price);
    //     // console.log(priceEl.value);
    //     amountPriceEl.textContent = amountPrice + ' руб.';
    //
    // });
    // removeEl.addEventListener('click', function (evt) {
    //     amountPrice = amountPrice - priceEl.value;
    //     amountPriceEl.textContent = amountPrice;
    //
    // });
// };
//ошибки: был задан class кнопке, а не id
//весь код был в функции calculateProducts, но она нигде не вызывалась.
// const price = parseInt(priceEl.value); - было вне функции, поэтому price = NaN было; добавила во внутрь функции и событие работает


// let amountPrice = 0;
// const amountPriceEl = document.getElementById('amountPrice');
// amountPriceEl.textContent = amountPrice;



