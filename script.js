// 
// Calc
// 
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
        // await sleep(5000);
    }
}