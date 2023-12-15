let display = document.forms[0].elements.display;

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.toString().slice(0, -1);
}

function appendToDisplay(value) {
    const char = display.value.toString().charAt(display.value.length - 1);
    if (['+', '-', '*', '/'].includes(char) && ['+', '-', '*', '/'].includes(value)) {
        console.log("No duplicate operators!");  
        return;
    } else {
        console.log(char);
        display.value += value;
    }
}


function calculate() {
    display.value = eval(display.value);
}
