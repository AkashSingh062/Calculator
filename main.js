let num1 = null;
let num2 = null;
let operator = '';
let newNumber = true;

const output = document.querySelector('.output-js');
output.innerText ='0';

document.querySelectorAll('.btn-js').forEach((btn)=>{
   btn.addEventListener('click',() => {
      if(newNumber){
         output.innerText = btn.innerText;
         newNumber = false;
      }
      else{
         if(output.innerText === '0'){
            output.innerText = btn.innerText;
         }else{
            output.innerText += btn.innerText;
         }
      }

      if(!operator){
         num1 = Number(output.innerText);
      }else{
         num2 = Number(output.innerText);
      }
   });
});
let currentOperatorBtn = null;
document.querySelectorAll('.btn-op-js').forEach((btn)=>{
   btn.addEventListener('click', ()=>{
      if(currentOperatorBtn){
         currentOperatorBtn.classList.remove('btn-op-col');
      }
      if(num1 != null){
         if(operator == ''){
            operator = btn.innerText;
            output.innerText = operator;
            newNumber = true;
            btn.classList.add('btn-op-col');
            currentOperatorBtn = btn;
         }else{
            if( num2 != null){
               const sum = eql(num1, num2);
               output.innerText = sum+' '+btn.innerText;
               num1 = sum;
               num2 = null;
               operator = btn.innerText;
               newNumber = true;
               btn.classList.add('btn-op-col');
               currentOperatorBtn = btn;
            }
            else{
               operator = btn.innerText;
               output.innerText = operator;
               newNumber = true;
               btn.classList.add('btn-op-col');
               currentOperatorBtn = btn;
            }
         }
      } 
   });
});

document.querySelector('.btn-eql-js').addEventListener('click', ()=>{
   if (num1 !== null && num2 !== null && operator)  {
         const sum = eql(num1, num2);
         output.innerText = sum;
         num1 = sum;
         num2 = null;
         operator = '';
         newNumber = true;
         currentOperatorBtn.classList.remove('btn-op-col');
         currentOperatorBtn = null;   
   }
});
document.querySelector('.btn-clr-js').addEventListener('click', ()=>{
   output.innerText = '0';
   num1 = null;
   num2 = null;
   operator = '';
   newNumber = true;
   if(currentOperatorBtn){
      currentOperatorBtn.classList.remove('btn-op-col');
      currentOperatorBtn = null;
   }
});


function eql(num1, num2) {
   switch(operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case 'x': return num1 * num2;
      case '/': 
         if (num2 === 0) return 'Error: Division by zero';
         return num1 / num2;
      default: return num1;
   }
}