const calcBox = document.getElementById("calc-box");
let displayNumber = 0;
let number1 = 0;
let number2 = 0
let operator = -1;
let awnser = 0;
let on= 0;

document.getElementById("1").addEventListener("click", calcAction);
document.getElementById("2").addEventListener("click", calcAction);
document.getElementById("3").addEventListener("click", calcAction);
document.getElementById("4").addEventListener("click", calcAction);
document.getElementById("5").addEventListener("click", calcAction);
document.getElementById("6").addEventListener("click", calcAction);
document.getElementById("7").addEventListener("click", calcAction);
document.getElementById("8").addEventListener("click", calcAction);
document.getElementById("9").addEventListener("click", calcAction);
document.getElementById("0").addEventListener("click", calcAction);
document.getElementById("+").addEventListener("click", calcAction);
document.getElementById("-").addEventListener("click", calcAction);
document.getElementById("*").addEventListener("click", calcAction);
document.getElementById("/").addEventListener("click", calcAction);
document.getElementById("=").addEventListener("click", calcAction);
document.getElementById("AC").addEventListener("click", clearCalc);
document.getElementById("On").addEventListener("click", powerCalc);

function calcAction(e) {
    if(e.target.id>="0" && e.target.id<="9") {
        if(displayNumber == 0) {
            displayNumber = e.target.id;
        }else {
            displayNumber += e.target.id;
        }
    }else if(e.target.id === "+" && operator === -1) {
        number1 = displayNumber;
        operator = "+";
        displayNumber += " + ";
    }else if(e.target.id === "-" && operator === -1) {
        number1 = displayNumber;
        operator = "-";
        displayNumber += " - ";
    }else if(e.target.id === "-" && operator === -1) {
        number1 = displayNumber;
        operator = "-";
        displayNumber += " - ";
    }else if(e.target.id === "/" && operator === -1) {
        number1 = displayNumber;
        operator = "/";
        displayNumber += displayNumber + " \u00f7 "
    }else if(e.target.id === "*" && operator === -1) {
        number1 = displayNumber;
        operator = "*";
        displayNumber += " \u00d7 ";
    }else if(e.target.id === "=" && operator != -1) {
        if(operator === "+") {
          let item = displayNumber.indexOf("+");   
          let start = item + 1;
          number2 = displayNumber.substr(start);
          number1 = Number(number1);
          number2 = Number(number2);
          awnser = number1 + number2;
          displayNumber = awnser;
        }else if(operator === "-") {
          let item = displayNumber.indexOf("-");   
          let start = item + 1;
          number2 = displayNumber.substr(start);
          number1 = Number(number1);
          number2 = Number(number2);
          awnser = number1 - number2;
          displayNumber = awnser;
        }else if(operator === "*") {
          let item = displayNumber.indexOf("\u00d7");   
          let start = item + 1;
          number2 = displayNumber.substr(start);
          number1 = Number(number1);
          number2 = Number(number2);
          awnser = number1 * number2;
          displayNumber = awnser;
        }else if(operator === "/") {
          let item = displayNumber.indexOf("\u00f7");   
          let start = item + 1;
          number2 = displayNumber.substr(start);
          number1 = Number(number1);
          number2 = Number(number2);
          awnser = number1 / number2;
          displayNumber = awnser;
        }
    }
    calcBox.value = displayNumber;
}

function clearCalc() {
    displayNumber = 0;
    number1 = 0;
    number2 = 0;
    operator = -1;
    awnser = 0;
    calcBox.value = displayNumber;
}

function powerCalc() {
    if(on===0) {
        calcBox .value = displayNumber;
        on = 1;
    }else if(on===1) {
        clearCalc();
        calcBox.value = "";
        on = 0;
    }
}