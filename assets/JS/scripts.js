var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    console.log(currentNumber)
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    console.log(currentNumber)
}

