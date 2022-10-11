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
let newDisplay = "";
buttons.forEach(button => button.addEventListener("click", function(e) {
    if(e.target.className == "buttons num") {
        displayValue += e.target.textContent;
        display.textContent = displayValue;
    } else if(e.target.className == "buttons oper") {
        firstVal = parseInt(displayValue);
        operator = e.target.textContent;
        display.textContent = e.target.textContent;

        buttons.forEach(button => button.addEventListener("click", function(e) {
            if(e.target.className == "buttons num") {
                newDisplay += e.target.textContent;
                display.textContent = newDisplay;
            } else if (e.target.id == "equal") {
                secondVal = parseInt(newDisplay);
                console.log(operator);
                if(operator == "+") {
                    display.textContent = add(firstVal, secondVal);
                }
            }
        }))
    }
}));


