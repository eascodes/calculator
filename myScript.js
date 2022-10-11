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
buttons.forEach(button => button.addEventListener("click", function(e) {
    displayValue = e.target.textContent;
    display.textContent = displayValue;
}));


