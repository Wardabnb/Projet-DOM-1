function toggleFavorite(e) {
  e.classList.toggle("active");
}
function deleteElement(e) {
  const rows = e.target.parentElement.parentElement.parentElement;
  const hr = document.querySelector("hr");

  rows.remove();
  hr.remove();
}
var priceElement = document.querySelector(".price");
console.log(priceElement);
var priceString = priceElement.innerText;
var priceFloat = parseFloat(priceString.replace("$", ""));
console.log(priceFloat);
function addArticle(e) {
  const rows = e.target.parentElement.parentElement;
  const counter = rows.querySelector(".counter");
  const parsedCounter = parseInt(counter.innerText);
  counter.innerText = parsedCounter + 1;
  console.log(counter);

  // adjust price

  let total = priceFloat * (parsedCounter + 1); // Utiliser parsedCounter + 1 pour le nouveau total
  total = "$" + total.toFixed(2); // toFixed(2) pour un affichage correct avec deux décimales
  console.log(total);
  // Mettre à jour l'élément price avec le nouveau total
  var priceTotal = rows.querySelector(".price");
  priceTotal.innerText = total;
}
function removeArticle(e) {
  const rows = e.target.parentElement.parentElement;
  console.log(rows);
  const counter = rows.querySelector(".counter");
  const parsedCounter = parseInt(counter.innerText);

  // Empêcher la décrémentation en dessous de 1
  if (parsedCounter > 1) {
    counter.innerText = parsedCounter - 1;
    let total = priceFloat * (parsedCounter - 1); // Utiliser parsedCounter - 1 pour le nouveau total
    total = "$" + total.toFixed(2); // toFixed(2) pour un affichage correct avec deux décimales
    console.log(total);
    // Mettre à jour l'élément price avec le nouveau total
    var priceTotal = rows.querySelector(".price");
    priceTotal.innerText = total;
  }
}
