//======================================= Variables and Events =========================================

useroperator = '';
usernumbers = [];
lastresult = 0;
userFirstNumEntry=true;
nextOperation=false;
userNextOperator=false;
userSecondNumEntry=false;
operandLengthChecked=false;

button1=document.getElementById('one');
button2=document.getElementById('two');
button3=document.getElementById('three');
button4=document.getElementById('four');
button5=document.getElementById('five');
button6=document.getElementById('six');
button7=document.getElementById('seven');
button8=document.getElementById('eight');
button9=document.getElementById('nine');
button0=document.getElementById('zero');
buttonDecimal=document.getElementById('decimal');
buttonSign=document.getElementById('sign');

buttonDivision=document.getElementById('division');
buttonMultiple=document.getElementById('multiple');
buttonMinus=document.getElementById('minus');
buttonSum=document.getElementById('sum');

buttonEqual=document.getElementById('equal');
buttonClear=document.getElementById('clear');
buttonBackspace=document.getElementById('backspace');

buttonHistory=document.getElementById('History');

firstOperand=document.getElementById('firstOperand');
Operator=document.getElementById('Operator');
secondOperand=document.getElementById('secondOperand');
resault=document.getElementById('resault');

button1span=document.getElementById('oneSpan');
button2span=document.getElementById('twoSpan');
button3span=document.getElementById('threeSpan');
button4span=document.getElementById('fourSpan');
button5span=document.getElementById('fiveSpan');
button6span=document.getElementById('sixSpan');
button7span=document.getElementById('sevenSpan');
button8span=document.getElementById('eightSpan');
button9span=document.getElementById('nineSpan');
button0span=document.getElementById('zeroSpan');
buttonDecimalspan=document.getElementById('decimalSpan');
buttonSignspan=document.getElementById('signSpan');

buttonDivisionspan=document.getElementById('divisionSpan');
buttonMultiplespan=document.getElementById('multipleSpan');
buttonMinusspan=document.getElementById('minusSpan');
buttonSumspan=document.getElementById('sumSpan');

buttonEqualspan=document.getElementById('equalSpan');
buttonClearspan=document.getElementById('clearSpan');
buttonBackspacespan=document.getElementById('backspaceSpan');

buttonHistory=document.getElementById('HistorySpan');

window.addEventListener("keydown", (event) => {
  switch (String(event.keyCode)) {
      case '97': button1span.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      case '98':button2span.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      case '99': button3span.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      case '100': button4span.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      case '101': button5span.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      case '102': button6span.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      case '103': button7span.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      case '104': button8span.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      case '105': button9span.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      case '96': button0span.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      case '110': buttonDecimalspan.style.backgroundColor = 'hsl(0, 0%, 66%)'; break;
      
      case '107': buttonSumspan.style.backgroundColor = 'hsl(120, 100%, 31%)'; break;
      case '109': buttonMinusspan.style.backgroundColor = 'hsl(120, 100%, 31%)'; break;
      case '106': buttonMultiplespan.style.backgroundColor = 'hsl(120, 100%, 31%)'; break;
      case '111': buttonDivisionspan.style.backgroundColor = 'hsl(120, 100%, 31%)'; break;

      case '13': buttonEqualspan.style.backgroundColor = 'hsl(201, 100%, 44%)'; break;
      case '27': buttonClearspan.style.backgroundColor = 'hsl(340deg 100% 40%)'; break;
      case '77': buttonHistory.style.backgroundColor = 'hsl(40, 100%, 46%)'; break;
      case '8': buttonBackspacespan.style.backgroundColor = 'hsl(23, 97%, 42%)'; break;
  }  
    

});
window.addEventListener("keyup", (event) => {
  switch (String(event.keyCode)) {
      case '97': button1span.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      case '98':button2span.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      case '99': button3span.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      case '100': button4span.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      case '101': button5span.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      case '102': button6span.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      case '103': button7span.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      case '104': button8span.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      case '105': button9span.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      case '96': button0span.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      case '110': buttonDecimalspan.style.backgroundColor = 'hsl(0, 0%, 89%)'; break;
      
      case '107': buttonSumspan.style.backgroundColor = 'hsl(101, 100%, 35%)'; break;
      case '109': buttonMinusspan.style.backgroundColor = 'hsl(101, 100%, 35%)'; break;
      case '106': buttonMultiplespan.style.backgroundColor = 'hsl(101, 100%, 35%)'; break;
      case '111': buttonDivisionspan.style.backgroundColor = 'hsl(101, 100%, 35%)'; break;

      case '13': buttonEqualspan.style.backgroundColor = 'hsl(190, 100%, 42%)'; break;
      case '27': buttonClearspan.style.backgroundColor = 'hsl(345deg 100% 47%)'; break;
      case '77': buttonHistory.style.backgroundColor = 'hsl(40, 100%, 50%)'; break;
      case '8': buttonBackspacespan.style.backgroundColor = 'hsl(23, 97%, 46%)'; break;
  }  

});

//======================================= Keyboard Events =========================================

window.addEventListener("keyup", (event) => {

    switch (String(event.keyCode)) {
      case '97': show(event,"1"); break;
      case '98': show(event,"2"); break;
      case '99': show(event,"3"); break;
      case '100': show(event,"4"); break;
      case '101': show(event,"5"); break;
      case '102': show(event,"6"); break;
      case '103': show(event,"7"); break;
      case '104': show(event,"8"); break;
      case '105': show(event,"9"); break;
      case '96': show(event,"0"); break;
      case '110': show(event,"."); break;
      
      case '107': show(event,"+"); break;
      case '109': show(event,"-"); break;
      case '106': show(event,"&#215;"); break;
      case '111': show(event,"&#247;"); break;

      case '13': show(event,"="); break;
      case '27': show(event,"c"); break;
      case '77': show(event,"m"); break;
      case '8': show(event,"&#8592;"); break;

      default:
        console.log('keypress event happen codekey: '+event.keyCode);
        break;
    }
  });

  //======================================= Mouse Eventss =========================================

  button1.addEventListener("click", (event) => {show(event,"1");});
  button2.addEventListener("click", (event) => {show(event,"2");});
  button3.addEventListener("click", (event) => {show(event,"3");});
  button4.addEventListener("click", (event) => {show(event,"4");});
  button5.addEventListener("click", (event) => {show(event,"5");});
  button6.addEventListener("click", (event) => {show(event,"6");});
  button7.addEventListener("click", (event) => {show(event,"7");});
  button8.addEventListener("click", (event) => {show(event,"8");});
  button9.addEventListener("click", (event) => {show(event,"9");});
  button0.addEventListener("click", (event) => {show(event,"0");});
  buttonDecimal.addEventListener("click", (event) => {show(event,".");});
  buttonSign.addEventListener("click", (event) => {show(event,"-/+");});

  buttonDivision.addEventListener("click", (event) => {show(event,"&#247;");});
  buttonMultiple.addEventListener("click", (event) => {show(event,"&#215;");});
  buttonMinus.addEventListener("click", (event) => {show(event,"-");});
  buttonSum.addEventListener("click", (event) => {show(event,"+");});

  buttonEqual.addEventListener("click", (event) => {show(event,"=");});
  buttonClear.addEventListener("click", (event) => {show(event,"c");});
  buttonHistory.addEventListener("click", (event) => {show(event,"m");});
  buttonBackspace.addEventListener("click", (event) => {show(event,"&#8592;");});


//   ============================== functions ========================


function show(eve,entryChar) {

  showStatus(eve,entryChar);

//action
for (let i = 0; i < 1; i++) {

  // user enter =/Enter key
  if (entryChar=="=") {
    //user just hit =
    if (firstOperand.innerHTML=='' && Operator.innerHTML=='' && secondOperand.innerHTML=='') {
      Operator.innerHTML=0+"="
      resault.innerHTML=0;
      return;
    }
    if (firstOperand.innerHTML!='' && Operator.innerHTML=='' && secondOperand.innerHTML=='') {
      resault.innerHTML=firstOperand.innerHTML;
      return;
    }

    if (firstOperand.innerHTML!='' && Operator.innerHTML!='' && secondOperand.innerHTML!='' && !nextOperation) {
      usernumbers[i]=firstOperand.innerHTML;

      //clean secondOperand
      const str = secondOperand.innerHTML;
      noParentheses = str.replace(/[^a-zA-Z0-9- ]/g, '');
      usernumbers[i + 1]=noParentheses;

      lastresult= usernumbers[i];
      useroperator =Operator.innerHTML;
      console.log('useroperator: ' + useroperator)

      resault.innerHTML=calc(usernumbers,useroperator).toLocaleString("en-US");
      if(operandLengthChecked){
        resault.style.fontSize = '1.1rem';
        resault.style.fontWeight ='600';
      }
      nextOperation=true;
      return;
    }
  
    if (firstOperand.innerHTML!='' && Operator.innerHTML!='' && secondOperand.innerHTML!='' && nextOperation) {
      usernumbers[i]=lastresult;
      useroperator =Operator.innerHTML;
      //clean secondOperand
      const str = secondOperand.innerHTML;
      noParentheses = str.replace(/[^a-zA-Z0-9- ]/g, '');
      usernumbers[i + 1]=noParentheses;

      resault.innerHTML=calc(usernumbers,useroperator).toLocaleString("en-US");
      if(operandLengthChecked){
        resault.style.fontSize = '1.1rem';
        resault.style.fontWeight ='600';
      }
      userSecondNumEntry=false;
      return;
    }
  }



  // ================================= user enter numbers =================================

  if (entryChar=="1" && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
    firstOperand.innerHTML+=1;
    firstOperand.innerHTML*=1;
    return;
  }
  }else if (entryChar=="1" && !userFirstNumEntry) {
    if (nextOperation && !userSecondNumEntry) {
        resetOperation();
        firstOperand.innerHTML=1;
        return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=1;
    secondOperand.innerHTML*=1;
    return;
    }
  }
  if (entryChar=="2" && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
      firstOperand.innerHTML+=2;
      firstOperand.innerHTML*=1;
      return;
    }
  }else if (entryChar=="2" && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML=2;
      return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=2;
    secondOperand.innerHTML*=1;
    return;
  }
}
  if (entryChar=="3" && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
    firstOperand.innerHTML+=3;
    firstOperand.innerHTML*=1;
    return;
    }
  }else if (entryChar=="3" && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML=3;
      return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=3;
    secondOperand.innerHTML*=1;
    return;
    }
  }
  if (entryChar=="4" && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
    firstOperand.innerHTML+=4;
    firstOperand.innerHTML*=1;
    return;
    }
  }else if (entryChar=="4" && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML=4;
      return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=4;
    secondOperand.innerHTML*=1;
    return;
    }
  }
  if (entryChar=="5" && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
    firstOperand.innerHTML+=5;
    firstOperand.innerHTML*=1;
    return;
    }
  }else if (entryChar=="5" && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML=5;
      return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=5;
    secondOperand.innerHTML*=1;
    return;
    }
  }
  if (entryChar=="6" && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
    firstOperand.innerHTML+=6;
    firstOperand.innerHTML*=1;
    return;
    }
  }else if (entryChar=="6" && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML=6;
      return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=6;
    secondOperand.innerHTML*=1;
    return;
    }
  }
  if (entryChar=="7" && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
    firstOperand.innerHTML+=7;
    firstOperand.innerHTML*=1;
    return;
    }
  }else if (entryChar=="7" && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML=7;
      return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=7;
    secondOperand.innerHTML*=1;
    return;
    }
  }
  if (entryChar=="8" && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
    firstOperand.innerHTML+=8;
    firstOperand.innerHTML*=1;
    return;
    }
  }else if (entryChar=="8" && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML=8;
      return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=8;
    secondOperand.innerHTML*=1;
    return;
    }
  }
  if (entryChar=="9" && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
    firstOperand.innerHTML+=9;
    firstOperand.innerHTML*=1;
    return;
    }
  }else if (entryChar=="9" && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML=9;
      return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=9;
    secondOperand.innerHTML*=1;
    return;
    }
  }
  if (entryChar=="0" && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
    firstOperand.innerHTML+=0;
    firstOperand.innerHTML*=1;
    return;
    }
  }else if (entryChar=="0" && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML=0;
      return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=0;
    secondOperand.innerHTML*=1;
    return;
    }
  }

  if (entryChar=="." && userFirstNumEntry) {
    if(checkOperandLen(firstOperand.innerHTML)) {
    firstOperand.innerHTML+=firstOperand.innerHTML==''?'0.':'.'
    //firstOperand.innerHTML+='.';
    return;
    }
  }else if (entryChar=="." && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML='0.';
      return;
    }
    if(checkOperandLen(secondOperand.innerHTML)) {
    secondOperand.innerHTML+=secondOperand.innerHTML==''?'0.':'.';
    return;
    }
  }
  if (entryChar=="-/+" && userFirstNumEntry) {
    firstOperand.innerHTML*=-1;
    return;
  }else if (entryChar=="-/+" && !userFirstNumEntry){
    if (nextOperation && !userSecondNumEntry) {
      resetOperation();
      firstOperand.innerHTML=0;
      return;
    }
    //clean secondOperand
    const str = secondOperand.innerHTML;
    noParentheses = str.replace(/[^a-zA-Z0-9- ]/g, '');
    noParentheses *= -1;
    secondOperand.innerHTML=noParentheses<0?('('+noParentheses+')'):Number(noParentheses);
    return;
  }



// ================================= user enter operators =================================

  if (entryChar=="+" && !nextOperation) {
    firstOperand.innerHTML==''?firstOperand.innerHTML=0:'';
    Operator.innerHTML="+";
    userFirstNumEntry=false;
    return;
  } else if (entryChar=="+" && nextOperation) {
    firstOperand.innerHTML=lastresult;
    Operator.innerHTML="+";
    secondOperand.innerHTML='';
    userSecondNumEntry=true;
    return;
  }


  if (entryChar=="-" && !nextOperation) {
    firstOperand.innerHTML==''?firstOperand.innerHTML=0:'';
    Operator.innerHTML="-";
    userFirstNumEntry=false;
    return;
  }
  else if (entryChar=="-" && nextOperation) {
    firstOperand.innerHTML=lastresult;
    Operator.innerHTML="-";
    secondOperand.innerHTML='';
    userSecondNumEntry=true;
    return;
  }
  if (entryChar=="&#215;" && !nextOperation) {
    firstOperand.innerHTML==''?firstOperand.innerHTML=0:'';
    Operator.innerHTML="&#215;";
    userFirstNumEntry=false;
    return;
  }
  else if (entryChar=="&#215;" && nextOperation) {
    firstOperand.innerHTML=lastresult;
    Operator.innerHTML="&#215;";
    secondOperand.innerHTML='';
    userSecondNumEntry=true;
    return;
  }
  if (entryChar=="&#247;" && !nextOperation) {
    firstOperand.innerHTML==''?firstOperand.innerHTML=0:'';
    Operator.innerHTML="&#247;";
    userFirstNumEntry=false;
    return;
  }
  else if (entryChar=="&#247;" && nextOperation) {
    firstOperand.innerHTML=lastresult;
    Operator.innerHTML="&#247;";
    secondOperand.innerHTML='';
    userSecondNumEntry=true;
    return;
  }


// ================================= user hit other keys =================================

if (entryChar=="c") {
  firstOperand.innerHTML='';
  Operator.innerHTML='';
  secondOperand.innerHTML='';
  resault.innerHTML=0;
  userFirstNumEntry=true;
  userSecondNumEntry=false;
  nextOperation=false;
  usernumbers = [];
  lastresult = 0;
  return;
}

if (entryChar=="m") {
  firstOperand.innerHTML=lastresult;
  Operator.innerHTML='';
  secondOperand.innerHTML='';
  userFirstNumEntry=true;
  userSecondNumEntry=false;
  return;
}

// Backspace key 
if (entryChar=="&#8592;") {
  if(firstOperand.innerHTML!='' && Operator.innerHTML=='' && secondOperand.innerHTML==''){
    str=firstOperand.innerHTML;
    firstOperand.innerHTML=str.slice(0,-1);
    firstOperand.innerHTML*=1;

    return;
  }
  if(firstOperand.innerHTML!='' && Operator.innerHTML!='' && secondOperand.innerHTML==''){
    return;
  }
  if(firstOperand.innerHTML!='' && Operator.innerHTML!='' && secondOperand.innerHTML!=''){
    if (nextOperation) {
      firstOperand.innerHTML='';
      resetOperation();
      return;
    }else if(!nextOperation){
      str=secondOperand.innerHTML;
      secondOperand.innerHTML=str.slice(0,-1);
      secondOperand.innerHTML*=1;
      return;
    }
  }
}

  //End loop
}
}


function checkOperandLen(num) {
  if (num.length>=10) {
    return false;
  }  
  if (num.length>=9 && num.length<10) {
  firstOperand.style.fontSize = '1.1rem';  
  firstOperand.style.fontWeight ='600';
    Operator.style.fontSize = '1.1rem';
    Operator.style.fontWeight ='600';
    secondOperand.style.fontSize = '1.1rem';
    secondOperand.style.fontWeight ='600';
    operandLengthChecked=true;
  }

  if (num.length>=0 && num.length<10) {
    return true;
  }
}


function showStatus(eve,entryChar) {
  //some explanations
  if(eve.keyCode!=undefined){
   console.log("User enter : " + entryChar + " using " + (eve.type=='keyup'? 'pressed key ':'') +  eve.keyCode);
 }else{
   console.log("User enter : " + entryChar + " using " + (eve.type=='click'? 'clicked button ':'') +  eve.target.innerHTML);
 }
  // status
 console.log("Value of firstOperand : " + firstOperand.innerHTML);
 console.log("Value of operator : " + Operator.innerHTML);
 console.log("Value of secondOperand : " + secondOperand.innerHTML);
 console.log("Value of resault : " + resault.innerHTML);
 console.log("Value of Last Calculation : " +lastresult);
 console.log("Value of nextOperation Flag : " +nextOperation);
 console.log("Value of user first number Flag : " +userFirstNumEntry);
 console.log("Value of user second number Flag : " +userSecondNumEntry);
 }


function resetOperation() {
    Operator.innerHTML='';
    secondOperand.innerHTML='';
    resault.innerHTML=0;
    userFirstNumEntry=true;
    userSecondNumEntry=false;
    nextOperation=false;
    userNextOperator=false; 
}


function calc(numbers, operator) {
  if (operator == "+") {
    operationR=Number(lastresult) + Number(numbers[numbers.length - 1]) ;
    lastresult=operationR
    return operationR;
  }
  if (operator == "-") {
    operationR=Number(lastresult) - Number(numbers[numbers.length - 1])  ;
    lastresult=operationR
    return operationR;
  }
  if (operator == "×") {
    operationR=Number(lastresult) * Number(numbers[numbers.length - 1]) ;
    lastresult=operationR
    return operationR;
  }
  if (operator == "÷") {
    operationR=Number(lastresult) / Number(numbers[numbers.length - 1]) ;
    lastresult=operationR
    return operationR;
  }
}