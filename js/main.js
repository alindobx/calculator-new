//getValue of Digits
const leftPos = document.querySelector('.leftPos');
const rightPos = document.querySelector('.rightPos');
const getSum = document.querySelector('.sum');
const getSymbols = document.querySelectorAll('.symbol');
const selectDigit = document.querySelectorAll('.numbersBtn');
const equalBtn = document.getElementById('equal');
const getOperator = document.querySelector('.operator');
const clearAll = document.getElementById('clearAll');

let sumTotal = [];
let addTotal = [];
let clickCount = 0;
console.log(sumTotal);

//clear function
clearAll.addEventListener("click", ()=>{
    for (let x of selectDigit) {
        x.classList.remove('noClick');
    }
    leftPos.innerHTML = "0";
    rightPos.innerHTML = "";
    getSum.innerHTML = '';
    clickCount = 0;

})

//get you digits function
const getDigitValue = () => {
    selectDigit.forEach(digit =>{
        digit.addEventListener('click',(e) =>{
            const value = parseInt(e.target.innerHTML, 10);
            getSum.innerHTML = '';
            addTotal.push(value);
            console.log(addTotal);
            console.log(sumTotal.push(value));
            if(sumTotal.length === 1){
                leftPos.innerHTML = `${value}`
            }else{
                rightPos.append(`${value}`)
            }
            clickCount++
            console.log("clickCount",clickCount)
            if(clickCount > 10) {
               console.log("pass 10")
                for (let x of selectDigit){
                    x.classList.add('noClick')
                }
            }
        })
    })
}
getDigitValue();
//Equation Button
equalBtn.addEventListener("click",()=>{
    const totalSum = eval(sumTotal[0] + sumTotal[1] + sumTotal[2])
    getSum.innerHTML = `${totalSum}`
    leftPos.innerHTML = '';
    getOperator.innerHTML = ''
    rightPos.innerHTML = '';
    console.log('= button pressed');
    console.log(totalSum);
    sumTotal = [];
})
//click Operator Buttons
getSymbols.forEach(sym => {
    sym.addEventListener('click',(e)=>{
        switch(e.target.innerHTML) {
            case "+":
                sumTotal.push('+')
                console.log("The operator is currently","+")
                getOperator.innerHTML = '+';
                break;
            case "-":
                sumTotal.push('-')
                getOperator.innerHTML = '-';
                console.log("The operator is currently","-")
        }
    })
});

