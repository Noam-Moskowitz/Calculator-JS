const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

const operatorButtons = [
    document.getElementById(`+`),
    document.getElementById(`-`),
    document.getElementById(`x`),
    document.getElementById(`/`)
];

const keysContainer = document.querySelector(`.keys-container`);
const keysArray = [];
const keys = document.querySelectorAll(`.key`)
keys.forEach(key => {
    keysArray.push(key)
});
let input = screen1
let operator = 0;

const disableOperators = () => {
    operatorButtons.forEach(button => {
        button.disabled = true;
        document.getElementById(`=`).disabled = false;
    });
}
const enableOperators = () => {
    operatorButtons.forEach(button => {
        button.disabled = false;
    });
}

keysContainer.addEventListener('click', function (event) {
    if (keysArray.indexOf(event.target) !== -1) {
        if (event.target.textContent == `+`) {
            input = screen2;
            screen2.style.backgroundColor = "lightgreen";
            screen2.style.backgroundImage = "url(./Images/plus.svg)"
            operator = `+`;
            disableOperators();
            return
        } else if (event.target.textContent == `-`) {
            input = screen2;
            screen2.style.backgroundColor = "lightcoral";
            screen2.style.backgroundImage = "url(./Images/minus.svg)"
            operator = `-`;
            disableOperators();
            return
        } else if (event.target.textContent == `x`) {
            input = screen2;
            screen2.style.backgroundColor = "lightseagreen";
            screen2.style.backgroundImage = "url(./Images/times.svg)"
            operator = `*`;
            disableOperators();
            return
        }
        else if (event.target.textContent == `÷`) {
            input = screen2;
            screen2.style.backgroundColor = "lightgoldenrodyellow";
            screen2.style.backgroundImage = "url(./Images/divide.svg)"
            operator = `/`;
            disableOperators();
            return

        } else if (event.target.textContent == `=`) {
            screen1.textContent = solveEquation(Number(screen1.innerHTML), Number(screen2.innerHTML), operator);
            screen1.style.backgroundColor = 'lightgrey';
            screen2.textContent = '';
            screen2.style.backgroundColor = `lightblue`;
            screen2.style.backgroundImage = `none`;
            document.getElementById(`=`).disabled = true;
            input = screen1;
            enableOperators();
            return
        }
        else if (event.target.textContent == `C`) {
            screen1.textContent = null;
            screen2.textContent = null;
            screen1.style.backgroundColor = `lightblue`;
            screen2.style.backgroundColor = `lightblue`;
            screen2.style.backgroundImage = `none`;
            input = screen1;
            enableOperators();
            return
        }
        input.innerHTML += event.target.textContent;
    }
})

const solveEquation = (num1, num2, operator) => {
    let result = null;
    if (operator == `+`) {
        result = num1 + num2;
    }
    else if (operator == `-`) {
        result = num1 - num2;
    }
    else if (operator == `*`) {
        result = num1 * num2;
    }
    else if (operator == `/`) {
        result = num1 / num2;
    }
    return result
}
