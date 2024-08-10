const display = document.getElementById('display');

function allClear() {
    display.value = '';
}

function deleteOneDigit() {
    display.value = display.value.toString().slice(0, -1);
}

function enteringValue(number) {
    display.value += number;
}

function result() {
    
        display.value = eval(display.value);
    
}