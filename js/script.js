let lcd = null; // displayen
let memory = 0; // Lagrat/gamlat värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /

function init() {
    lcd = document.getElementById('lcd');
    let keyBoard = document.getElementById('keyBoard');
    keyBoard.onclick = buttonClick;
}

function buttonClick(e) {
    let btn = e.target.textContent; // Här använder vi textContent istället för id för att få knappens värde

    if (!isNaN(btn)) { // Kolla om knappen är en siffra
        addDigit(btn);
    } else if (btn === '.') { // Om det är en kommatecken
        addComma();
    } else if (['+', '-', 'x', '/'].includes(btn)) { // Om det är en operator
        setOperator(btn);
    } else if (btn === '=') { // Om det är lika med-tecknet
        calculate();
    } else if (btn === 'CLEAR') { // Om det är rensa-knappen
        clearLCD();
    }
}

function addDigit(digit) {
    lcd.value += digit;
}

function addComma() {
    if (!lcd.value.includes('.')) {
        lcd.value += '.';
    }
}

function setOperator(operator) {
    memory = parseFloat(lcd.value);
    arithmetic = operator;
    lcd.value = '';
}

function calculate() {
    let current = parseFloat(lcd.value);
    let result;
    switch (arithmetic) {
        case '+':
            result = memory + current;
            break;
        case '-':
            result = memory - current;
            break;
        case 'x':
            result = memory * current;
            break;
        case '/':
            result = memory / current;
            break;
        default:
            result = current;
    }
    lcd.value = result;
    arithmetic = null;
}

function clearLCD() {
    lcd.value = '';
    memory = 0;
    arithmetic = null;
}

window.onload = init;
