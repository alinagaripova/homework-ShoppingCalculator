function calculateProducts(pric, number) {

    const nameEl = document.getElementById('name');
    const priceEl = document.getElementById('price');

    const amountProductEl = document.getElementById('amountProduct');



    const nameExpProductEl = document.getElementById('nameExpensiveProduct');
    const priceExpProductEl = document.getElementById('priceExpensiveProduct');

    const addEl = document.getElementById('add');
    const removeEl = document.getElementById('remove');
    // const price = parseInt(priceEl.value);

    let amountPrice = 0;
    const amountPriceEl = document.getElementById('amountPrice');
    amountPriceEl.textContent = amountPrice;

    addEl.addEventListener('click', function (evt) {
        amountPrice = amountPrice + priceEl.value;
        amountPriceEl.textContent = amountPrice;

    });
    removeEl.addEventListener('click', function (evt) {
        amountPrice = amountPrice - priceEl.value;
        amountPriceEl.textContent = amountPrice;

    });
};


// let amountPrice = 0;
// const amountPriceEl = document.getElementById('amountPrice');
// amountPriceEl.textContent = amountPrice;



