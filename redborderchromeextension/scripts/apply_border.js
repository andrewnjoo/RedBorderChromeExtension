var head = document.head;

var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = chrome.extension.getURL('styles.css');
head.appendChild(link);

document.body.className += " red-border";

function applyBorder(elements) {

    let colors = [
        "red-border"
      ];
  
    for (let i = 0; i < elements.length; i++) {
      elements[i].className += ` ${colors[0]}`;
  
      if (elements[i].children) {
        applyBorder(elements[i].children);
      }
    }
  }
  
  applyBorder(document.body.children);
  