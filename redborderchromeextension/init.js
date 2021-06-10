// declare vars
let displayBorder = false;

//draws a red border around extension
document.body.style.border = '1px solid grey';
document.body.style.padding = '5px';

// add event listener to button
document.addEventListener("DOMContentLoaded", buttonlistener);
function buttonlistener() {
    document.getElementById("123").addEventListener('click', handleclick);
}

//change border color of all elements to red
function handleclick() {
    if (displayBorder) {
        // switch on - sets button border to green - applies red borders
        document.getElementById("123").innerHTML = "turn off!";
        document.body.style.border = '5px solid red';
        chrome.tabs.query({"active": true, "currentWindow": true}, handleApplyBorderScript);
        displayBorder = false;
    } else {
        document.getElementById("123").innerHTML = "turn on!";
        document.body.style.border = '1px solid grey';
        chrome.tabs.query({"active": true, "currentWindow": true}, handleRemoveBorderScript);
        displayBorder = true;
    }
}

// runs functions
function handleApplyBorderScript(tab) {
    chrome.tabs.executeScript(null, {file: "./apply_border.js"});
  }
  
function handleRemoveBorderScript(tab) {
    chrome.tabs.executeScript(null, {file: "./remove_border.js"});
  }
  