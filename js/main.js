//getValue of Digits
const leftOperand = document.querySelector('.leftOperand');
const rightPos = document.querySelector('.rightPos');
const getSum = document.querySelector('.sum');
const getSymbols = document.querySelectorAll('.symbol');
const selectDigit = document.querySelectorAll('.numbersBtn');
const equalBtn = document.getElementById('equal');
const getOperator = document.querySelector('.operator');
const clearAll = document.getElementById('clearAll');

let addTotal = [];
let leftOperandArr = [];
const previousOperand = [];
let operatorArr =[];
let clickCount = 0;

//clear function
clearAll.addEventListener("click", ()=>{
    for (let x of selectDigit) {
        x.classList.remove('noClick');
    }
    leftOperand.innerHTML = "0";
    rightPos.innerHTML = "";
    getSum.innerHTML = '';
    clickCount = 0;

})

//get you digits function
const getOperand = () => {
    selectDigit.forEach(digit =>{
        digit.addEventListener('click',(e) =>{
            const value = parseInt(e.target.innerHTML, 10);
            getSum.innerHTML = '';
            //checks to see if the value is a number or not
            if(isNaN(value) === true) {
                const total = leftOperandArr.join('')//join elements in array
                previousOperand.push(total);
                console.log('this is the value',value)
                leftOperand.innerHTML = '';
                leftOperandArr = [];
                switch(value) {
                    case '+':
                        operatorArr.push(value);
                        console.log('this is the +',value)
                        break;
                    case'-':
                        operatorArr.push(value);
                        console.log('this is the -',value)
                        break;
                }
            }else{
                leftOperandArr.push(value);
                leftOperand.append(`${value}`);
                console.log('pushed to array')
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
// equalBtn.addEventListener("click",()=>{
//     const secondGrab = leftOperand.innerHTML;
//     addTotal.push(`${secondGrab}`);
//     let operand1 = parseInt(addTotal[0],10) ;
//     let operand2 = parseInt(addTotal[1], 10);
//     const finalTotal =  operand1 + operand2;
//      console.log(finalTotal);
//     console.log('test',operand1 + 1);
//     leftOperand.innerHTML = `${finalTotal}`
// })
//click Operator Buttons
// getSymbols.forEach(sym => {
//     sym.addEventListener('click',(e)=>{
//         const valueCnt = leftOperand.innerHTML;
//         switch(e.target.innerHTML) {
//             case "+":
//                 addTotal.push(valueCnt);
//                 if(leftOperand.innerHTML === ''){
//                     console.log('empty')
//                 }else{
//
//                 }
//                 console.log("The operator is currently","+")
//                 console.log(addTotal)
//                 break;
//             case "-":
//                 addTotal.push(valueCnt)
//                 console.log("The operator is currently","-")
//         }
//     })
// });

