var counter = 0;
document.body.className = document.body.className.replace(" red-border", "");

function removeBorder(elements) {

  let colors = [
    "red-border"
  ];

  for (let i = 0; i < elements.length; i++) {

    let color = " " + colors[0];
    if (typeof elements[i].className === 'string') {
      elements[i].className = elements[i].className.replace(color, "");
    }
    
    if (elements[i].children) {
      removeBorder(elements[i].children);
    }
  }
}

removeBorder(document.body.children);
