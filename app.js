let numberInput = document.getElementById('number')
let btn = document.getElementById('convert-btn')
let output = document.getElementById('output')
const romanNumerals = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];
btn.addEventListener('click', ()=> {
    let inputValue = parseInt(numberInput.value);
    if(!inputValue){
        output.innerText = "Please enter a valid number";
    } else if(inputValue < 1){
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if(inputValue > 3999){
        output.innerText = "Please enter a number less than or equal to 3999";
    } else{
        let result = ''
        for(const[number,roman] of romanNumerals){
            while(inputValue >=number){
                result += roman;
                inputValue -= number;
            }
        }
        output.innerText = result;
    }
    output.classList.remove('hidden');


})