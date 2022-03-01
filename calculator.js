const currentOperand = document.getElementById("current-operand");
const previousOperand = document.getElementById("previous-operand");
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
