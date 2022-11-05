const output = document.getElementById('output');
const myNum = document.getElementById('myNum');
const testBtn = document.getElementById('testBtn');

const numChecker = num => {
    const message = num % 2 == 0 ? `${num} is even` : `${num} is odd`;
    
    return message;
}

const checkVal = () => {
    const val = myNum.value;
    
    output.innerText = numChecker(val);
}

testBtn.addEventListener('click', checkVal, false);
