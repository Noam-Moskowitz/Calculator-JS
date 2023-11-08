const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const decimal = document.getElementById('.');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const times = document.getElementById('x');
const divide = document.getElementById('/');
const equals = document.getElementById('=');
const clear = document.getElementById('clear');

const N1 = "1";
const N2 = '2';
const N3 = '3';
const N4 = '4';
const N5 = '5';
const N6 = '6';
const N7 = '7';
const N8 = '8';
const N9 = '9';
const N0 = '0';
const Spls = "+";
const Smns = '-';
const Stms = '*';
const Sdvd = '/';
const Sdcml = '.';

let swap = true;
let input = screen1
let operator = 0;

function dsble() {
    if (operator !== 0) {
        plus.disabled = true;
        minus.disabled = true;
        times.disabled = true;
        divide.disabled = true;
    }
}

clear.addEventListener("click", function () {
    document.location.reload();
})
one.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + N1;
    input.innerHTML = equation;
});
two.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + N2;
    input.innerHTML = equation;
});
three.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + N3;
    input.innerHTML = equation;
});
four.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + N4;
    input.innerHTML = equation;
});
five.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + N5;
    input.innerHTML = equation;
});
six.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + N6;
    input.innerHTML = equation;
});
seven.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + N7;
    input.innerHTML = equation;
});
eight.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + N8;
    input.innerHTML = equation;
});
nine.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + N9;
    input.innerHTML = equation;
});
zero.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + N0;
    input.innerHTML = equation;
});
decimal.addEventListener("click", function () {
    let currentScreenValue = input.innerHTML;
    let equation = currentScreenValue + Sdcml;
    input.innerHTML = equation;
});
plus.addEventListener("click", function () {
    input = screen2;
    operator = 1;
    screen2.style.backgroundColor = "lightgreen";
    dsble();
});
minus.addEventListener("click", function () {
    input = screen2;
    operator = 2;
    screen2.style.backgroundColor = "lightcoral";
    dsble();
});
times.addEventListener("click", function () {
    input = screen2;
    operator = 3;
    screen2.style.backgroundColor = "lightseagreen";
    dsble();
});
divide.addEventListener("click", function () {
    input = screen2;
    operator = 4;
    screen2.style.backgroundColor = "lightgoldenrodyellow";
    dsble();
});
equals.addEventListener("click", function () {
    let a = Number(screen1.innerHTML);
    let b = Number(screen2.innerHTML);
    screen2.style.backgroundColor = 'lightgrey';
    if (operator == 1) {
        screen1.style.backgroundColor = 'black';
        screen2.innerHTML = a + b;
    } else if (operator == 2) {
        screen1.style.backgroundColor = 'black';
        screen2.innerHTML = a - b;
    } else if (operator == 3) {
        screen1.style.backgroundColor = 'black';
        screen2.innerHTML = a * b;
    } else if (operator == 4) {
        screen1.style.backgroundColor = 'black';
        screen2.innerHTML = a / b;
    }
});
