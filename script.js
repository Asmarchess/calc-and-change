
function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    let display = document.getElementById('display');
    let result = eval(display.value); 
    display.value = result;
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.value = '';
}
