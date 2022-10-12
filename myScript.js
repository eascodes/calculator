function add(a, b) {
    return a + b;
  };
  
function subtract(a, b) {
    return a - b;
  };

function multiply(a, b) {
    return a * b;
  };

function divide(a, b) {
    if (b === 0) alert("You can't do that!");
    return a / b;
  };

  function operate(num1, operator, num2) {
    if (operator == "+") {return add(num1, num2);} 
    else if (operator == "-") {return subtract(num1, num2);}
    else if (operator == "*") {return multiply(num1, num2);}
    else if (operator == "/") {return divide(num1, num2);}
  }

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons");

let displayValue = "";
let firstVal = "";
let operator = "";
let secondVal = "";
//let newDisplay = "";

getFirstVal();

function getFirstVal() {buttons.forEach(button => button.addEventListener("click", startCalc));}

function startCalc(e) {
    if(e.target.className == "buttons num") {
        displayValue += e.target.textContent;
        display.textContent = displayValue;
    } else if(e.target.className == "buttons oper") {
        firstVal = parseInt(display.textContent);
        operator = e.target.textContent;
        console.log(firstVal);
        display.textContent = e.target.textContent;
        finishCalc();
    }
}

function finishCalc() {
    displayValue = "";
    buttons.forEach(button => button.removeEventListener("click", startCalc))
    buttons.forEach(button => button.addEventListener("click", completeCalc))
    }

function completeCalc(e) {
    if(e.target.className == "buttons num") {
        displayValue += e.target.textContent;
        display.textContent = displayValue;
    } else if (e.target.id == "equal") {
        secondVal = parseInt(displayValue);
        if(operator == "+") {
            firstResult = add(firstVal, secondVal);
            display.textContent = firstResult;
            displayValue = "";
            getFirstVal();
        } else if(operator == "-") {
            display.textContent = subtract(firstVal, secondVal);
        } else if(operator == "*") {
            display.textContent = multiply(firstVal, secondVal);
        } else if(operator == "/") {
            display.textContent = divide(firstVal, secondVal);
        }
    }
}

function calculate(first) {

}

