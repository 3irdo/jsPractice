function calcPriceWithDiscount(price, discount) {
  const percentDiscount = 100 - discount;
  const toPay = (price * percentDiscount) / 100;

  return toPay;
}

function onClickcalcDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const priceWithDiscount = calcPriceWithDiscount(priceValue, discountValue);

  const resultPrice = document.getElementById("resultPrice");

  resultPrice.innerText =
    "El precio con un descuento de " +
    discountValue +
    " es: $" +
    priceWithDiscount;
}
