window.onload = function() {}

function changeError(el) {
  var errorSpan = document.getElementById("error-span");
  errorSpan.innerText = el.value;
}

function generatePoints() {
  var amount = getAmount();
  var weights = getWeights();
  var error = parseInt(document.getElementById("error").value)/100;
  var points = [];
  for(let i = (0 - amount/2); i < amount/2; i++) {
    let err = (Math.random()*error) - (error/2);
    let y = (weights[0]*i + weights[1]*(i**2) + weights[2]*(i**3) + weights[3]*(i**4))*(1+err);
    console.log([i, y]);
    points.push([i, y]);
  }
  return points;
}

function getWeights() {
  var weights = [];
  var weightElements = document.getElementsByClassName("weight");
  for(let i=0; i < weightElements.length; i++) {
    weights.push(parseInt(weightElements[i].value));
  }
  return weights;
}

function getAmount() {
  var amount = 0;
  var amountElements = document.getElementsByClassName("amount-of-points");
  for(let i=0; i < amountElements.length; i++) {
    if (amountElements[i].checked == true) {
      amount = parseInt(amountElements[i].value);
    }
  }
  return amount;
}
