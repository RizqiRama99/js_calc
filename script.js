const calculatorScreen = document.querySelector(".input-value");

const numbers = document.querySelectorAll(".num_btn");

const updateScreen = (number) => {
    calculatorScreen.value = number;
};


let prevNumber = "";
let calculationOpertator = "";
let currentNumber = "";


const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});



const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});


const inputOperator = (operator) => {
    if (calculationOpertator === '') {
        prevNumber = currentNumber;
    }
    calculationOpertator = operator;
    currentNumber = '0';
};


const equalSign = document.querySelector(".equal-btn");

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});


const calculate = () => {
    let result = "";
    switch (calculationOpertator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOpertator = "";
};


const clearBtn = document.querySelector(".delete-all");

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = "";
    calculationOpertator = "";
    currentNumber = "0";
};


const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

const percentage = document.querySelector(".percent");

percentage.addEventListener("click", () => {
    percent();
    updateScreen(currentNumber);
})

const percent = () => {
    let hasil = parseFloat(currentNumber) / 100;
    currentNumber = hasil;
}