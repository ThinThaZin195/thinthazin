const Input= document.getElementById("Input");
let memory="";

function displayInput(display){
    getInput().value += display;
}
function Clear(){
    getInput().value="";
}
function Operator(){
    getInput().value= eval(getInput().value);
}
function Delete(){
    getInput().value = getInput().value.toString().slice(0,-1);
}
function memoryAdd() {
    const inputValue = getInput().value;
    if(memory==""){
        if(isDigit(inputValue)){
            memory = inputValue;
        }
    }
    else{
        displayInput(memory);
        memory="";
    }
    console.log(memory)
}
document.getElementById("Memory").addEventListener('click', memoryAdd);

function getInput(){
    return document.getElementById("Input");
}

function isDigit(value){
    return /^\d+$/.test(value)
}



