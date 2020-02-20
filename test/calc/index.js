// var buttonPlus = document.getElementById("buttonPlus");
// var buttonMinus = document.getElementById("buttonMinus");
// var buttonMultiply = document.getElementById("buttonMultiply");
// var buttonDevide = document.getElementById("buttonDevide");

var operatinButtons = document.getElementsByClassName("operation-button");

// arrayOfButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function makeOperation(operationCode) {
  var number1 = Number(input1.value);
  var number2 = Number(input2.value);
  if (operationCode === "+") {
    var result = number1 + number2;
  } else if (operationCode === "-") {
    var result = number1 - number2;
  } else if (operationCode === "*") {
    var result = number1 * number2;
  } else if (operationCode === "/") {
    var result = number1 / number2;
  }
  alert(result);
}

function onOperationButtonClick(eventOject) {
  var clickedElement = eventOject.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperation(operation);
}

// buttonPlus.addEventListener("click", onOperationButtonClick);
// buttonMinus.addEventListener("click", onOperationButtonClick);
// buttonMultiply.addEventListener("click", onOperationButtonClick);
// buttonDevide.addEventListener("click", onOperationButtonClick);

for (var i = 0; i < operatinButtons.length; i++) {
    debugger
  var button = operatinButtons[i];
  button.addEventListener("click", onOperationButtonClick);
}
