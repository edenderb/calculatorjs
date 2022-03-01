const result = document.getElementById("current-operand");
const last = document.getElementById("previous-operand");
const numbers = document.querySelectorAll("[data-number]");
const operator = document.getElementById("operator");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const equals = document.getElementById("equals");
const decimal = document.getElementById("decimal");

let currentOperator = null;
let firstOperator = "";
let secondOperator = "";
let reset = false;

//setting functionality of operators
let add = (x, y) => {
  answer = x + y;
  currentOperator = null;
  return answer;
};

let subtract = (x, y) => {
  answer = x - y;
  currentOperator = null;
  return answer;
};

let multiply = (x, y) => {
  answer = x * y;
  currentOperator = null;
  return answer;
};

let divide = (x, y) => {
  answer = x / y;
  currentOperator = null;
  return answer;
};

function populateDisplay(number) {
  if (reset.textContent === "0" || reset) {
    resetScreen();
  }
  result.textContent += number;
}

function resetScreen() {
  result.textContent = "";
  reset = false;
}

function setOperation(operator) {
  if (currentOperator != null) {
    run();
  }
}

function run() {
  if (currentOperator === null || reset) {
    return;
  }
  if (currentOperator === "%" && result.textContent === "0") {
    result.textContent = "ERROR";
    return;
  }
}

numbers.forEach((button) =>
  button.addEventListener("click", () => populateDisplay(button.textContent))
);
