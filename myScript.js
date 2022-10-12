function add(a, b) {
    return Number(Math.round((a + b) + 'e8') + 'e-8');
  };
  
function subtract(a, b) {
    return Number(Math.round((a - b) + 'e8') + 'e-8');
  };

function multiply(a, b) {
    return Number(Math.round((a * b) + 'e8') + 'e-8');
  };

function divide(a, b) {
    if (b === 0) alert("You can't do that!");
    return Number(Math.round((a / b) + 'e8') + 'e-8');
  };

  function operate(num1, operator, num2) {
    if (operator == "+") {return add(num1, num2);} 
    else if (operator == "-") {return subtract(num1, num2);}
    else if (operator == "*") {return multiply(num1, num2);}
    else if (operator == "/") {return divide(num1, num2);}
  }

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons");
const clear = document.querySelector("#AC");
const back = document.querySelector("#C");
const dot = document.querySelector("#dot");
const percent = document.querySelector("#percent");
let displayValue = "";
let firstVal = "";
let operator = "";
let secondVal = "";

setInitialEvent();

clear.addEventListener("click", clearDisplay);
function clearDisplay() {
    display.textContent = "";
    displayValue = "";
    removeEvents();
    setInitialEvent();
}

 back.addEventListener("click", backspace);
 function backspace() {
    if(displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);
        display.textContent = displayValue;
     }
 }

 dot.addEventListener("click", addDot);
 function addDot() {
    if (displayValue.includes(".")) {
        return;
    }
    displayValue += ".";
    display.textContent = displayValue;
 }

 percent.addEventListener("click", makePercent);
 function makePercent() {
    display.textContent = displayValue / 100;
 }

function removeEvents() {
    buttons.forEach(button => button.removeEventListener("click", completeCalc))
    buttons.forEach(button => button.removeEventListener("click", startCalc))
}

function setInitialEvent() {buttons.forEach(button => button.addEventListener("click", startCalc));}

function removeClass() {
    buttons.forEach(button => { 
        if(button.classList.contains("selected")) {
            button.classList.remove("selected");
    }});
}

function startCalc(e) {
    if(e.target.className == "buttons num") {
        displayValue += e.target.textContent;
        display.textContent = displayValue;
    } else if(e.target.className == "buttons oper") {
        firstVal = parseFloat(display.textContent);
        operator = e.target.textContent;
        e.target.classList.add("selected");
        resetEvents();
    }
}

function resetEvents() {
    displayValue = "";
    buttons.forEach(button => button.removeEventListener("click", startCalc))
    buttons.forEach(button => button.addEventListener("click", completeCalc))
    }

function completeCalc(e) {
    if(e.target.className == "buttons num") {
        removeClass();
        displayValue += e.target.textContent;
        display.textContent = displayValue;
    } else if (e.target.className == "buttons oper") {
        e.target.classList.add("selected");
        secondVal = parseFloat(displayValue);
        firstResult = operate(firstVal, operator, secondVal);
        operator = e.target.textContent;
        firstVal = firstResult;
        display.textContent = firstResult;
        displayValue = "";
        buttons.forEach(button => button.removeEventListener("click", completeCalc))
        resetEvents();
    } else if (e.target.id == "equal") {
        buttons.forEach(button => button.removeEventListener("click", completeCalc))
        secondVal = parseFloat(displayValue);
        if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
            firstResult = operate(firstVal, operator, secondVal);
            display.textContent = firstResult;
            displayValue = "";
            setInitialEvent();
        }
    }
}