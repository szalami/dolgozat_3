/*
File: app.js
Author: Faragó Csaba
Copyright: 2023, Faragó Csaba
Group: Szoft I-1-E
Date: 2023-02-08
Github: https://github.com/szalami/dolgozat_3.git
Licenc: GNU GPL
*/

const length = document.querySelector("#length");
const push = document.querySelector("#push");
const rpm = document.querySelector("#rpm");
const result = document.querySelector("#result");
const refresh = document.querySelector("#refresh");

let checkValue = (element) => {
    element.classList.remove("text-danger");

    if(isNaN(element.value) || element.value == ""){
        element.classList.add("text-danger");
        element.value = "Üres mező vagy nem szám!";
        return false;
    }else{
        return true;
    }
}

let calculateResult = () => {
    result.value = length.value / (push.value * rpm.value);
}

result.addEventListener("click", ()=> {
    if( checkValue(length) && 
        checkValue(push) &&
        checkValue(rpm) ){
            calculateResult();
            refresh.classList.remove("hidden");
        }
});

refresh.addEventListener("click", () => {
    inputField = document.getElementsByTagName("input");
    for (let i = 0; i < inputField.length; i++) {
        inputField[i].value = "";     
    }
    refresh.classList.add("hidden");
});