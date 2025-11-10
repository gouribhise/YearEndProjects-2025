// document.getElementById("add").addEventListener('click', () => {
//     // Read inputs inside the event
//     const num1 = parseFloat(document.getElementById("first").value);
//     const num2 = parseFloat(document.getElementById("second").value);
  
//     // Reference the <h1> or <div> where answer should appear
//     const ans = document.getElementById("ans");
  
//     // Check for valid inputs
//     if (isNaN(num1) || isNaN(num2)) {
//       ans.innerText = "⚠️ Please enter valid numbers!";
//       return;
//     }
  
//     // Perform addition
//     const result = num1 + num2;
  
//     // Show the result
//     ans.innerText = `Result: ${result}`;
//   });

function calc(operation){
    const num1=parseInt(document.getElementById('first').value);
    const num2=parseInt(document.getElementById('second').value);
    const ans=document.getElementById('ans');
    ope=document.getElementById('op');
    if(isNaN(num1)||isNaN(num2)){
        ans.innerText="Please enter valid numbers!";
        return ;
    }
 let result=0
 let ops=""
    switch(operation){
        case "add":
            result=num1+num2
            ops="Addition"
             break;
        case 'sub':
            result=num1-num2
            ops="Subtraction"
             break;
        case 'divi':
            result=num1/num2
            ops="Divide"
             break;
        case 'mul':
            result=num1*num2
            ops="Multiply"
             break;
        default:
            return 
     }
    ans.innerText=`Result ${result}`
    op.innerText=`${ops}`
 }
  