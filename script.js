
function egeCase() {
    let displayNumber = document.getElementById('display').value;
    if (displayNumber == '+' || displayNumber == '-' || displayNumber == '*' || displayNumber == '/' || displayNumber == '%' || displayNumber == '=') {
        alert('Give input first.');
        document.getElementById('display').value = "";
    }
}

const displayNumber = document.getElementById('display').value;

// insert number
function insert(number) {
    document.getElementById('display').value = document.getElementById('display').value + number;
}

// calculate numbers
function calculate() {
    document.getElementById('display').value = eval(document.getElementById('display').value)

}

function clearAll() {
    document.getElementById('display').value = "";
}

function backspace() {
    var num = document.getElementById('display').value;
    num = num.substring(0, num.length - 1);
    document.getElementById('display').value = num;
}