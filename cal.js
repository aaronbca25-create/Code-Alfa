const display = document.getElementById('display');
const result = document.getElementById('result');

function appendValue(value) {
    display.value += value;
    showResult();
}

function clearDisplay() {
    display.value = '';
    result.innerText = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
        result.innerText = '';
    }
    catch {
        display.value = "Error";
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    showResult();
}

function showResult() {
    try {
        result.innerText = "= " + eval(display.value);
    }
    catch {
        result.innerText = "";
    }
}

document.addEventListener("keydown", function (event) {

    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendValue(key);
    }

    else if (key === "Enter") {
        calculate();
    }

    else if (key === "Backspace") {
        deleteLast();
    }

    else if (key === "Escape") {
        clearDisplay();
    }
});