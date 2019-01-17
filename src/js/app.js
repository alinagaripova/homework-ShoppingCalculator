// function calculateProducts(pric, number) {

    const nameEl = document.getElementById('name');
    const priceEl = document.getElementById('price');

    const amountProductEl = document.getElementById('amountProduct');

    const nameExpProductEl = document.getElementById('nameExpensiveProduct');
    const priceExpProductEl = document.getElementById('priceExpensiveProduct');

    const addEl = document.getElementById('add');
    const removeEl = document.getElementById('remove');

    let amountPrice = 0;
    const amountPriceEl = document.getElementById('amountPrice');
    amountPriceEl.textContent = amountPrice;

    addEl.addEventListener('click', function (evt) {
        const price = parseInt(priceEl.value);
        amountPrice = amountPrice + price;
        // console.log(price);
        // console.log(priceEl.value);
        amountPriceEl.textContent = amountPrice;

    });
    removeEl.addEventListener('click', function (evt) {
        amountPrice = amountPrice - priceEl.value;
        amountPriceEl.textContent = amountPrice;

    });
// };
//ошибки: был задан class кнопке, а не id
//весь код был в функции calculateProducts, но она нигде не вызывалась.
// const price = parseInt(priceEl.value); - было вне функции, поэтому price = NaN было; добавила во внутрь функции и событие работает


// let amountPrice = 0;
// const amountPriceEl = document.getElementById('amountPrice');
// amountPriceEl.textContent = amountPrice;



