import {cosmicCalculator, message} from './cosmic_calendar.js';

let button = document.getElementById('button');
let output = document.getElementById('output')

// I want to have a calculater instance
// @param universe year to calculate, the input value
// @return calendar coversion result

button.addEventListener('click', function(){
    var hmya = document.getElementById('uni-input').value;
    let conversion = cosmicCalculator(hmya);
    // console.log(conversion[0]); prints first letter of date string
    output.innerText = conversion;
    if(conversion === undefined){
        output.innerText = message;
    }
    
    
    
})


