let incrbtn = document.querySelector('.incrbtn')
 let counterInput = document.querySelector(".counter input");
function incr() {
   let value = Number(counterInput.value);
   counterInput.value = value + 1;
}
incrbtn.addEventListener('click',incr)

let decrbtn = document.querySelector('.decrbtn')

function decr () {
  let value = Number(counterInput.value);
  if(value>1){
    counterInput.value = value - 1;
}
  }
decrbtn.addEventListener('click',decr)
 
function convertToPositiveNumber() {
    let positiveNum = Math.abs( counterInput.value );
    counterInput.value = positiveNum;
    
}

counterInput.addEventListener('keyup',convertToPositiveNumber)
