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
let plusSum = [];
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
    getLeftOperand.innerHTML = "";
    rightPos.innerHTML = "";
    getSum.innerHTML = '';
})

//get you digits function
const getOperand = () => {
    selectDigit.forEach(digit =>{
        digit.addEventListener('click',(e) =>{
            const getOperator = e.target.innerHTML;
            const value = parseInt(e.target.innerHTML, 10);
            plusSum.push(getLeftOperand.innerHTML);
            getSum.innerHTML = '';
            //checks to see if the value is a number or not
            if(isNaN(value) === true) {
                const total = leftOperandArr.join('')//join elements in array
                previousOperandArr.push(total);
                // getLeftOperand.innerHTML = '';
                leftOperandArr = [];
                switch(getOperator) {
                    case '+':
                        operatorArr.push(getOperator);
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
                // const runningTotal = parseInt(previousOperandArr[0], 10) + parseInt(leftOperandArr[0], 10);
                // getLeftOperand.innerHTML = `${runningTotal}`
                plusSum.pop()
                const last = plusSum.slice(-1);
                const lastTotal = parseInt(`${last}`,10)
                const pre = () => {
                    let final = 0
                    for (let char of previousOperandArr) {
                            final+= parseInt(char,10)
                    }
                    return final
                }
                // console.log(runningTotal);
                console.log('Final Total',value + pre());
                //Display final total in the Sum box
                getLeftOperand.innerHTML = `${value + pre()}`
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


