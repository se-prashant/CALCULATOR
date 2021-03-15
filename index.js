const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const keyContent = key.textContent;
    // console.log(keyContent);
    // console.log("pressed");
    if (keyContent === '=') {
      if (display.value != '0') {
        try {
          eval(display.value);
          display.value = eval(display.value);
        } catch (e) {
          if (e instanceof SyntaxError) {
            alert(e);
          }
        }
      }
    } else if (keyContent === 'AC') {
      display.value = '0';
    } else {
      if (display.value.length === 1 && display.value === '0') {
        display.value = keyContent;
      } else {
        var val = keyContent;
        // console.log(val);
        if (val === '×') val = '*';
        if (val === '÷') val = '/';
        display.value += val;
        // console.log(display.value);
      }
    }
  }
});


// function calculate(a,operator,b){
//   a = parseFloat(a);
//   b = parseFloat(b);
//   if(operator==='add'){
//       return a+b;
//   }
//   if(operator==='multiply'){
//     return a*b;
//   }
//   if(operator==='divide'){
//     return a/b;
//   }
//   if(operator==='minus'){
//     return a-b;
//   }
// }
