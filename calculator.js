const result = document.getElementById("current-operand");
const last = document.getElementById("previous-operand");
const numbers = document.querySelectorAll("[data-number]");
const operator = document.querySelectorAll("#operator");
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
  firstOperator = result.textContent;
  currentOperator = operator;
  last.textContent = `${firstOperator} ${currentOperator}`;
  reset = true;
}

function run() {
  if (currentOperator === null || reset) {
    return;
  }
  if (currentOperator === "%" && result.textContent === "0") {
    result.textContent = "ERROR";
    return;
  }

  secondOperator = result.textContent;
  last.textContent = `${firstOperator} ${currentOperator} ${secondOperator}`;
  result.textContent = round(outcome(firstOperator, secondOperator));
}
function round(number) {
  return Math.round(number * 1000) / 1000;
}

function outcome(x, y) {
  x = Number(x);
  y = Number(y);
  if (currentOperator === "+") {
    return add(x, y);
  } else if (currentOperator === "-") {
    return subtract(x, y);
  } else if (currentOperator === "*") {
    return multiply(x, y);
  } else if (currentOperator === "/") {
    return divide(x, y);
  }
}

function clearAll() {
  result.textContent = "";
  last.textContent = "";
  currentOperator = null;
  firstOperator = "";
  secondOperator = "";
}

numbers.forEach((button) =>
  button.addEventListener("click", () => populateDisplay(button.textContent))
);

operator.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);
equals.addEventListener("click", run);

decimal.addEventListener("click", () => {
  result.textContent += ".";
  if (result.textContent.includes(".")) {
    return;
  }
});

clear.addEventListener("click", clearAll);

del.addEventListener("click", () => {
  result.textContent = result.textContent.toString().slice(0, -1);
});
