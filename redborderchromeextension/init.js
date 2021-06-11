// declare vars
let displayBorder = false;

//draws a red border around extension
document.body.style.outline = '1px solid grey';
document.body.style.padding = '5px';

// add event listener to button
document.addEventListener("DOMContentLoaded", buttonlistener);
function buttonlistener() {
    document.getElementById("button").addEventListener('click', handleclick);
}

//change border color of all elements to red
function handleclick() {
    if (!displayBorder) {
        // switch on - sets button border to green - applies red borders
        document.getElementById("button").innerHTML = "turn off.";
        document.body.style.outline = '5px solid red';
        chrome.tabs.query({"active": true, "currentWindow": true}, handleApplyBorderScript);
        displayBorder = true;
    } else {
        document.getElementById("button").innerHTML = "turn on.";
        document.body.style.outline = '1px solid grey';
        chrome.tabs.query({"active": true, "currentWindow": true}, handleRemoveBorderScript);
        displayBorder = false;
    }
}

// runs functions
function handleApplyBorderScript(tab) {
    chrome.tabs.executeScript(null, {file: "./scripts/apply_border.js"});
  }

function handleRemoveBorderScript(tab) {
    chrome.tabs.executeScript(null, {file: "./scripts/remove_border.js"});
  }
