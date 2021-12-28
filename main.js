const rangesBlock = document.querySelector('.ranges-block')
const body = document.querySelector('body');
const result = document.querySelector('.result')

const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

let redVal;
let greenVal;
let blueVal;

const redField = document.querySelector('.red-value');
const greenField = document.querySelector('.green-value');
const blueField = document.querySelector('.blue-value');

rangesBlock.addEventListener('input', function(){
    redVal = red.value;
    redField.innerHTML = redVal;
  
    greenVal = green.value;
    greenField.innerHTML = greenVal;

    blueVal = blue.value;
    blueField.innerHTML = blueVal;

    let color = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
    

    body.style.background = color;
    result.innerHTML = color;

});