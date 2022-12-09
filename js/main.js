//getValue of Digits
const getLeftOperand = document.querySelector('.leftOperand');
const rightPos = document.querySelector('.rightPos');
const getSum = document.querySelector('.sum');
const getSymbols = document.querySelectorAll('.symbol');
const selectDigit = document.querySelectorAll('.numbersBtn');
const equalBtn = document.getElementById('equal');
const getOperator = document.querySelector('.operator');
const clearAll = document.getElementById('clearAll');
//Arrays
let leftOperandArr = [];
let previousOperandArr = [];
let operatorArr =[];
let rightOperandArr = [];
const clearArrays = () => {
    leftOperandArr = [];
    previousOperandArr = [];
    operatorArr =[];
    rightOperandArr = [];
}

let clickCount = 0;
//clear function
clearAll.addEventListener("click", ()=>{
    for (let x of selectDigit) {
        x.classList.remove('noClick');
    }
    getLeftOperand.innerHTML = "0";
    rightPos.innerHTML = "";
    getSum.innerHTML = '';
})

//get you digits function
const getOperand = () => {
    selectDigit.forEach(digit =>{
        digit.addEventListener('click',(e) =>{
            const getOperator = e.target.innerHTML;
            const value = parseInt(e.target.innerHTML, 10);
            getSum.innerHTML = '';
            //checks to see if the value is a number or not
            if(isNaN(value) === true) {
                const total = leftOperandArr.join('')//join elements in array
                previousOperandArr.push(total);
                console.log('this is the value',value)
                getLeftOperand.innerHTML = '';
                leftOperandArr = [];
                switch(getOperator) {
                    case '+':
                        operatorArr.push(getOperator);
                        console.log('this is the +',getOperator)
                        break;
                    case '-':
                        operatorArr.push(getOperator);
                        console.log('this is the -',getOperator)
                        break;
                    case '*':
                        operatorArr.push(getOperator);
                        console.log('this is the *',getOperator)
                        break;
                    case '/':
                        operatorArr.push(getOperator);
                        console.log('this is the /',getOperator)
                        break;
                }
            }else{
                leftOperandArr.push(value);
                getLeftOperand.append(`${value}`);
                console.log('else right')
            }

            if(clickCount > 10) {
               console.log("pass 10")
                for (let x of selectDigit){
                    x.classList.add('noClick')
                }
            }
        })
    })
}
getOperand();
//Equation Button
const calculateEquation = (leftOperand,operator,rightOperand) => {
    const totalAddition = parseInt(leftOperand) + parseInt(rightOperand);
    const totalSubtraction = parseInt(leftOperand) - parseInt(rightOperand);
    const totalMultiply = parseInt(leftOperand) * parseInt(rightOperand);
    const totalDivision = parseInt(leftOperand) / parseInt(rightOperand);
    switch(operator){
        case '+':
            getLeftOperand.innerHTML = "";
            getSum.innerHTML = `${totalAddition}`;
            clearArrays();
            break;
        case '-':
            getLeftOperand.innerHTML = "";
            getSum.innerHTML = `${totalSubtraction}`;
            clearArrays();
            break;
        case '*':
            getLeftOperand.innerHTML = "";
            getSum.innerHTML = `${totalMultiply}`;
            clearArrays();
            break;
        case '/':
            getLeftOperand.innerHTML = "";
            getSum.innerHTML = `${totalDivision}`;
            clearArrays();
            break;
    }
}
equalBtn.addEventListener("click",()=>{
    const totalLeft = leftOperandArr.join('');
    rightOperandArr.push(totalLeft)
    calculateEquation(previousOperandArr[0],operatorArr[0],rightOperandArr[0]);
})


